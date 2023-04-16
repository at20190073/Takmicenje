<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator=Validator::make($request->all(),[
            'first_name'=>'required|string|max:255',
            'last_name'=>'required|string|max:255',
            'addres'=>'required|string|max:255',
            'telephone'=>'required|string|max:255',
            'email'=>'required|string|max:255|email|unique:users',
            'password'=>'required|string|min:8'
        ]);

       if($validator->fails()){
       return response()->json($validator->errors());
       }

       $user=User::create([
        'first_name'=>$request->first_name,
        'last_name'=>$request->last_name,
        'addres'=>$request->addres,
        'telephone'=>$request->telephone,
        'email'=>$request->email,
        'password'=>Hash::make($request->password)
       ]);
      
       $token=$user->createToken('auth_token')->plainTextToken;
       
       return response()->json(['data'=>$user,'access_token'=>$token,
       'token_type'=>'Bearer']);

    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()
                ->json(['success' => false]);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['success' => true, 'access_token' => $token, 'token_type' => 'Bearer',]);
    }

    public function logout(){

        auth()->user()->tokens()->delete();
        return['message'=>'You have successfully logged out and the token was successfully deleted'];
     
         }
     
}
