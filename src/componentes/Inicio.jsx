import carrusel1 from '../img/carrusel3.jpg'
import Nosotros from './Nosotros';
import Contacto from './Contacto';

function Inicio(){
  return (    
    <div className="App">
    
        <div class="carousel">
            <div class="container-fluid">
                <div class="owl-carousel">
                    <div class="carousel-item">
                        <div class="carousel-img">
                            <img src={carrusel1} alt={Image} />
                        </div>
                        <div class="carousel-text">
                            <h1>Los <span>Mejores</span> Ingredientes</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac consequat at lectus in malesuada
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <Nosotros />

        <Contacto />

       
        
    </div>
   );
}
 
export default Inicio