import {useNavigate} from "react-router-dom";


function Pocetna(){
const navigate=useNavigate();
    return(
    <div  className='pocetna'>
    <div className="hero-text">
        <h1  className="naslov"> Welcome to the world of agriculture!</h1>
    </div>
    
    <br /><br /><br /><br /><br />
    <div>
        <p className="paragraf">Rent a garden at our estate and secure healthy vegetables of your choice!
        The goal of our application is to provide quality and healthy vegetables to our users. Create your own garden and our team of farmers and technologists will maintain it for you! We also offer the possibility of delivering vegetables to your home address.</p>
    <button  className="btn" onClick={()=>navigate('/makegarden')}>Make your own garden!</button>
    </div>
    
    </div>
  
    
    );
    }
    
    export default Pocetna;
    