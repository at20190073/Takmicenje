import Cart from "./Cart";

function MakeGarden({veg,kriterijum,add}){

    return(
      <div className="kontejner">
        <div className="row-garden">
        {kriterijum==""
        ?
        veg.map((f)=> <div  key={f.id} className="kartica"><Cart add={add} key={f.id} f={f} mod={1}></Cart><br /></div>)
        :
        <>
        </>
        }
           </div>
      </div>

    
    );

}
export default MakeGarden;