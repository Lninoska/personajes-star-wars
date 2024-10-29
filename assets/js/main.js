$(document).ready(() => {
    const urls  = [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
        "https://swapi.dev/api/people/3/",
        "https://swapi.dev/api/people/4/",
        "https://swapi.dev/api/people/5/",
    ];

    const crearcard = ({name, height, mass}) => {
        return`
        <div class="card">
            <h2>${name}</h2>  
            <p>Altura: ${height}</p>      
            <p>Peso: ${mass}</p>    
        </div>
        `;
    }; 
    $("#load-characters").click(() => {
        $("#contenedor-personajes").empty();

        urls.forEach(url => {
            fetch(url)
                .then(respuesta => {
                    if (!respuesta.ok) {
                        throw new Error('Error en la respuesta');
                        }
                        return respuesta.json();
                        })
                        .then(data => {
                            let contenidoHTML = crearcard(data);
                            $("#contenedor-personajes").append(contenidoHTML); 
                        })
                        .catch(error => {
                            console.log('Hubo un error:', error);
                        });
                });
                $("#contenedor-personajes").addClass('visible'); 
            });
        });

    // Segundos personajes
    $(document).ready(() => {
        const urls  = [
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/10/",
        ];
    
        const crearcard = ({name, height, mass}) => {
            return`
            <div class="card2">
                <h2>${name}</h2>  
                <p>Altura: ${height}</p>      
                <p>Peso: ${mass}</p>    
            </div>
            `;
        }; 
        $("#load-characters").click(() => {
            $("#contenedor-personajes2").empty();
    
            urls.forEach(url => {
                fetch(url)
                    .then(respuesta => {
                        if (!respuesta.ok) {
                            throw new Error('Error en la respuesta');
                            }
                            return respuesta.json();
                            })
                            .then(data => {
                                let contenidoHTML = crearcard(data);
                                $("#contenedor-personajes2").append(contenidoHTML); 
                            })
                            .catch(error => {
                                console.log('Hubo un error:', error);
                            });
                    });
                    $("#contenedor-personajes2").addClass('visible'); 
                });
            });
    
// tercer personajes 
$(document).ready(() => {
    const urls  = [
        "https://swapi.dev/api/people/11/",
        "https://swapi.dev/api/people/12/",
        "https://swapi.dev/api/people/13/",
        "https://swapi.dev/api/people/14/",
        "https://swapi.dev/api/people/15/",
    ];

    const crearcard = ({name, height, mass}) => {
        return`
        <div class="card3">
            <h2>${name}</h2>  
            <p>Altura: ${height}</p>      
            <p>Peso: ${mass}</p>    
        </div>
        `;
    }; 
    $("#load-characters").click(() => {
        $("#contenedor-personajes3").empty();

        urls.forEach(url => {
            fetch(url)
                .then(respuesta => {
                    if (!respuesta.ok) {
                        throw new Error('Error en la respuesta');
                        }
                        return respuesta.json();
                        })
                        .then(data => {
                            let contenidoHTML = crearcard(data);
                            $("#contenedor-personajes3").append(contenidoHTML); 
                        })
                        .catch(error => {
                            console.log('Hubo un error:', error);
                        });
                });
                $("#contenedor-personajes3").addClass('visible'); 
            });
        });

        // cuartos personajes 
$(document).ready(() => {
    const urls  = [
        "https://swapi.dev/api/people/16/",
        "https://swapi.dev/api/people/17/",
        "https://swapi.dev/api/people/18/",
        "https://swapi.dev/api/people/19/",
        "https://swapi.dev/api/people/20/",
        "https://swapi.dev/api/people/21/",
    ];

    const crearcard = ({name, height, mass}) => {
        return`
        <div class="card4">
            <h2>${name}</h2>  
            <p>Altura: ${height}</p>      
            <p>Peso: ${mass}</p>    
        </div>
        `;
    }; 
    $("#load-characters").click(() => {
        $("#contenedor-personajes4").empty();

        urls.forEach(url => {
            fetch(url)
                .then(respuesta => {
                    if (!respuesta.ok) {
                        throw new Error('Error en la respuesta');
                        }
                        return respuesta.json();
                        })
                        .then(data => {
                            let contenidoHTML = crearcard(data);
                            $("#contenedor-personajes4").append(contenidoHTML); 
                        })
                        .catch(error => {
                            console.log('Hubo un error:', error);
                        });
                });
                $("#contenedor-personajes4").addClass('visible'); 
            });
        });
