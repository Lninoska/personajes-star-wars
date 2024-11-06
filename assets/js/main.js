$(document).ready(() => {
    async function* personajes(inicio, final) {
        for(let id = inicio; id <= final; id++ ) {
            const url =`https://swapi.dev/api/people/${id}/`;
            try {
                const respuesta = await fetch (url);
                if (!respuesta.ok) {
                    throw new Error(`Hubo algún error al obtener el personaje`);
                }
                yield await respuesta.json();
            } catch (error) {
                console.log('Hubo algín error con el personaje:', error);
                continue;
            }
        }
    }

    async function loadcharacters(inicio, final) {
        const generator = personajes(inicio, final);
        let done = false;
        while(!done) {
            const {value, done: isDone} = await generator.next();
            done = isDone;
            if (value) {
                const data = value;
                let contenidoHTML = crearcard(data)
                $("#contenedor-personajes").append(`<h3> Personajes ${inicio} - ${final} </h3>`);
                $("#contenedor-personajes").append(contenidoHTML);
            }
        }
        $("#contenedor-personajes").addClass('visible');
    }
    const rangos = [ 
        {inicio:1, final: 5, label: "Personajes principales", Class:"btn-uno"},
        {inicio:6, final: 11, label: "Personajes secundarios", Class:"btn-dos"},
        {inicio:12, final: 17, label: "Personajes Significativos", Class:"btn-tres"},
    ];
    
    for(let i = 0; i < rangos.length; i++){
        const {inicio, final, label, Class} = rangos[i];
        const boton = $('<button>')
                    .text(label)
                    .addClass(Class)    
                    .click(()=> {
            $("#contenedor-personajes").empty();
            loadcharacters(inicio, final)
        });
        $("#botones").append(boton)
    }

    const crearcard = ({name, height, mass}) => {
        return`
            <div class="card">
            <h2>${name}</h2>
            <p>Altura: ${height}</p>
            <p>Peso: ${mass}</p>
            </div>
            `;
    };
})