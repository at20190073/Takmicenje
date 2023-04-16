
function Cart({f,add,mod,remove}){

  return(
    
      <div className="card">
        <img src={f.slika} className="card-img-top" alt="..."/>
      <h5 className="card-title">{f.naziv}</h5>
      
      <div className="card-body">
        
        <p className="card-text"> <br /> Season: {f.sezona}</p>
        {mod==1 ?
          <button className="btn1" onClick={()=>add(f.id)}>Add to the garden</button>
          :
          <button className="btn1" onClick={()=>remove(f.id)}>Remove from the garden</button>
  
        }
      </div>
    </div>
    
  
    
  
  );
  
  
  }
  export default Cart;