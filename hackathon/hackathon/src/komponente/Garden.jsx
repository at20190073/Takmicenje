import Cart from "./Cart";

function Garden({veg,kriterijum,remove}){

    return(
      
        <div className="row-garden">
          
        {kriterijum==""
        ?
        veg.map((f)=> <div  key={f.id} className="kartica"><Cart  key={f.id} f={f} mod={2} remove={remove}></Cart><br /></div>)
        :
        <>
  
        </> 
        }
      </div>
     
      

    );

}
export default Garden;