function Inicio(){
  return (    
    <div className="App">
      
      
        <div class="navbar navbar-expand-lg bg-light navbar-light">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand">Imperio <span>Empanadas</span></a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <a href="index.html" class="nav-item nav-link active">Inicio</a>
                        <a href="about.html" class="nav-item nav-link">Productos</a>
                        <a href="feature.html" class="nav-item nav-link">Nosotros</a>
                        <a href="team.html" class="nav-item nav-link">Contacto</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="carousel">
            <div class="container-fluid">
                <div class="owl-carousel">
                    <div class="carousel-item">
                        <div class="carousel-img">
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
    </div>
   );
}
 
export default Inicio