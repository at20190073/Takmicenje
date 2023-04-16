import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import NavBar from './komponente/NavBar';
import Login from './komponente/Login';
import Register from './komponente/Register';
import MakeGarden from './komponente/MakeGarden';
import { useState } from 'react';
import Garden from './komponente/Garden';


function App() {
const [token,setToken]= useState(); 
function addToken(auth_token){
  setToken(auth_token);
}
const[my_vegetables,setVegetables]=useState([]);
const[allVegetables]=useState([

  {
    id:1,
    naziv:"Pepper",
    slika:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOQeNa36xnbBUj2gZc0ZqzfCphQ25C9LtJbw&usqp=CAU",
    sezona:"july-sept",
    fav:0

  },
  {
    id:2,
    naziv:"Cucumber",
    slika:"https://online.idea.rs/images/products/121/121098375_1l.jpg?1604323090",
    sezona:"july-sept",
    fav:0
  },
  {
    id:3,
    naziv:"Tomatto",
    slika:"https://www.prva.rs/news/pics/2019/09/04/2039539556175e184eebe8541645838_orig.jpg",
    sezona:"jun-sept",
    fav:0
  },
  {
    id:4,
    naziv:"Cabbage",
    slika:"https://static.kupindoslike.com/Povrce-seme-Kupus-Futoski-Brassica-oleracea-var-capitata-56_slika_XL_125684345.jpg",
    sezona:"may-oct",
    fav:0
  },
  {
    id:5,
    naziv:"Beet",
    slika:"https://i0.wp.com/www.organela.rs/wp-content/uploads/2020/04/ponuda-cvekla.jpg?fit=1000%2C1000&ssl=1",
    sezona:"avg-sept",
    fav:0
  },
  {
    id:6,
    naziv:"Borecole",
    slika:"https://ocdn.eu/images/pulscms/MzQ7MDA_/168a809c20c28d1074d73eaed4d6506b.jpeg",
    sezona:"nov-jan",
    fav:0
  },
  {
    id:7,
    naziv:"Zucchini",
    slika:"https://fitofert.com/wp-content/uploads/2018/06/Fitofert-program-prihrane-povrca-tikvica.jpg",
    sezona:"july-sept",
    fav:0
  },
  {
    id:8,
    naziv:"Eggplant",
    slika:"https://online.idea.rs/images/products/121/121098314_1l.jpg?1604323088",
    sezona:"avg-sept",
    fav:0
  },
  {
    id:9,
    naziv:"Potato",
    slika:"https://online.idea.rs/images/products/124/124104366_1l.jpg?1500033239",
    sezona:"avg-sept",
    fav:0
  },
  {
    id:10,
    naziv:"Carrot",
    slika:"https://online.idea.rs/images/products/123/123100880_1l.jpg?1500033237",
    sezona:"oct-nov",
    fav:0
  },
]);

const [krterijumPretrage,setKriterijumPretrage]=useState("");
  
    function pretrazi(kriterijum){
      setKriterijumPretrage(kriterijum);
    }

  function add(id){
  for(var i=0;i<allVegetables.length;i++){
    if(allVegetables[i].id==id){
      allVegetables[i].fav=1;
    }
  }
   var array=allVegetables.filter((f)=>f.fav==1);
   setVegetables(array);
  }
  
  function remove(id){
    for(var i=0;i<allVegetables.length;i++){
      if(allVegetables[i].id==id){
        allVegetables[i].fav=0
      }
    }
    var array=allVegetables.filter((f)=>f.fav==1);
    setVegetables(array);
  }

  return (
    <div>
    <BrowserRouter>
    <NavBar token={token}></NavBar>
    <Routes>
      <Route path="/" element={<Pocetna></Pocetna>}></Route>
      <Route path="/login" element={<Login addToken={addToken}></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/yourgarden" element={<Garden kriterijum={krterijumPretrage} veg={my_vegetables} remove={remove}></Garden>}></Route>
      <Route path="/makegarden" element={<MakeGarden kriterijum={krterijumPretrage} veg={allVegetables} add={add}></MakeGarden>}></Route>
      
      
    </Routes>
   
    </BrowserRouter>
    
    </div>
  );
}

export default App;
