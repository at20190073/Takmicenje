import { Link } from 'react-router-dom';
import {GiFarmer } from 'react-icons/gi';
import axios from "axios";

function NavBar({token}){
    function handleLogout(){
       var config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/logout",
        headers: {
            Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
        },
       };
        
       axios(config)
       .then(function (response){
        console.log(JSON.stringify(response.data));
        window.sessionStorage.setItem("auth_token", null);
       })
       .catch(function (error){
        console.log(error);
       });
    }
return(
<div>
        <nav className="nav">
            <div className="nav__title"> <GiFarmer></GiFarmer></div>
                <ul className="nav__list">
                 
                <li className="nav__item">   <Link className="link" to='/'>Home</Link></li>
                <li className="nav__item">   <Link className="link" to='/yourgarden'>Your garden</Link></li>
                   {/* <li className="nav__item"> <Link className="link" to='/MakeGarden'>Make garden</Link></li>
                   
                    <li className="nav__item"> <Link  className="link" to='/register'>Register</Link></li>
                   */}
                   {token == null ? 
                   (
                   <li className="nav__item"> <Link   className="link" to='/login'>Log in</Link></li>
                   )
                   : 
                   (
                   <li className="nav__item"> <Link   className="link"  onClick={handleLogout}>Log out</Link></li> 
                   )} 

                    
                    
                </ul>
        </nav>
    </div>
    
);
}
export default NavBar;