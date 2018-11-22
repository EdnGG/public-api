// making request with FETCH    
const empleados = []

fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data => empleados => {
         data.results
        console.log(`Request con Fetch:`, empleados)
        mockup() // callback function

    })

// making request with AJAX
$.ajax({
    url: 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,cell,dob&nat=NZ,US',
    dataType: 'json',
    success: function (data) {
        console.log(`Request con Ajax:`, data);
    }
});

// Seleccionando y guardando en una variable el contenedor donde se imprimira la galeria
const gallery = document.querySelector('.gallery')


// Creating and apendding the Input serch Element
const formContainer = document.querySelector('.search-container')
    const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`

formContainer.innerHTML = formBrowser;

//Seleccionando y alamcenando en variables los dos text input del buscador
const searchInput = document.getElementById('search-input');
const submit = document.getElementById('search-submit');

//Agregando el eventListener al boton 'submit'
// Este ejecutara la funcion filter() 
submit.addEventListener('click', ()=>{
    let empleado = searchInput.value.toLowerCase()
    filter (empleado)
})

function filter(empleado) {
//Guardando todos los elementos de la coleccion de empleados
    let card1 = document.querySelectorAll('.card')
// Aplicando un ciclo 'for' para iteractuar con la coleccion guardada en variable 'card1' 
    for (let i = 0; i < card1.length; i++) {
// En esta linea guardamos el contenido que tiene el elemento con la clase 'card-name'
        let personName = card1[i].querySelector('.card-name').textContent;
// Si el contenido del valor del elemento es '0'? no se despliega nada 
// Y dejamos los elementos tal cual
    if (personName.indexOf(empleado) === 0) {
            console.log(card1[i])
            card1[i].style.display = "";
// De otra forma mostramos los c
        } else {
            console.log(card1[i])
            card1[i].style.display = "none";
        }
    }
}
// Esta funcion se ejecuta cuando Fetch resuelve la promesa
function mockup (){
    empleados
    let html = '';
    
        for( let i = 0; i < empleados.length; i+= 1) {
           console.log(empleados.length)
           
            html += 
                `
                <div class="card" onClick="printModal('${encodeURI(JSON.stringify(empleados[i]))}')">
                <div class="card-img-container">
                    <img class="card-img" src="${empleados[i].picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${empleados[i].name.first} , ${empleados[i].name.last}</h3>
                    <p class="card-text">${empleados[i].email}</p>
                    <p class="card-text cap">${empleados[i].location.city}, ${empleados[i].location.state}</p>
                </div>
                </div>
                `
            gallery.innerHTML = html;
        }
}

//Funcion que imprime el Modal Container
// function printModal(datos) {
//     datos = JSON.parse(decodeURI(datos));
//     console.log("Modal container works :)")
    
//     let modalContainer = `
//             <div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="${datos.picture.large}" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">${datos.name.first}</h3>
//                         <p class="modal-text">${datos.email}</p>
//                         <p class="modal-text cap">${datos.location.city}</p>
//                         <hr>
//                             <p class="modal-text">${datos.phone}</p>
//                             <p class="modal-text">${datos.location.city} , ${datos.location.state}</p>
//                             <p class="modal-text">${datos.dob.date}</p>
//                     </div>
//                 </div>


//                 <div class="modal-btn-container">                   
//                     <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal()">Prev</button>
//                     <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal()">Next</button>
//                 </div>
//             </div>`
//     gallery.innerHTML = modalContainer;
// }

// function prevModal(datos) {
//     console.log('function prevModal works :)')
//     datos = JSON.parse(decodeURI(datos[i]));

//     let modalContainer = `
//             <div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="${datos.picture.large}" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">${datos.name.first}</h3>
//                         <p class="modal-text">${datos.email}</p>
//                         <p class="modal-text cap">${datos.location.city}</p>
//                         <hr>
//                             <p class="modal-text">${datos.phone}</p>
//                             <p class="modal-text">${datos.location.city} , ${datos.location.state}</p>
//                             <p class="modal-text">${datos.dob.date}</p>
//                     </div>
//                 </div>


//                 <div class="modal-btn-container">                   
//                     <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal()">Prev</button>
//                     <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal()">Next</button>
//                 </div>
//             </div>`
//     gallery.innerHTML = modalContainer;
// }

// function nextModal(datos) {
//     console.log('function nextModal works :)')    
//     datos = JSON.parse(decodeURI(datos[i]));

//     let modalContainer = `
//             <div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="${datos.picture.large}" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">${datos.name.first}</h3>
//                         <p class="modal-text">${datos.email}</p>
//                         <p class="modal-text cap">${datos.location.city}</p>
//                         <hr>
//                             <p class="modal-text">${datos.phone}</p>
//                             <p class="modal-text">${datos.location.city} , ${datos.location.state}</p>
//                             <p class="modal-text">${datos.dob.date}</p>
//                     </div>
//                 </div>


//                 <div class="modal-btn-container">                   
//                     <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal()">Prev</button>
//                     <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal()">Next</button>
//                 </div>
//             </div>`
//     gallery.innerHTML = modalContainer;
// }

// //Funcion que cierra el Modal Container
// function closeModal(datos) {
//     datos = JSON.parse(decodeURI(datos));
//     console.log('Works closeModal')

//     let modalContainerButton = document.querySelector('.modal-container')
//     modalContainerButton.style.display = 'none';

//     for (let i = 0; i < datos.length; i += 1) {
//         console.log(datos.length)

//         html +=
//             `
//                 <div class="card" onClick="printModal('${encodeURI(JSON.stringify(datos[i]))}')">
//                 <div class="card-img-container">
//                     <img class="card-img" src="${datos[i].picture.medium}" alt="profile picture">
//                 </div>
//                 <div class="card-info-container">
//                     <h3 id="name" class="card-name cap">${datos[i].name.first} , ${datos[i].name.last}</h3>
//                     <p class="card-text">${datos[i].email}</p>
//                     <p class="card-text cap">${datos[i].location.city}, ${datos[i].location.state}</p>
//                 </div>
//                 </div>
//                 `
//         gallery.innerHTML = html;
//     }

//     // let gallery2 = document.querySelectorAll('.gallery')
//     // gallery2.style.display = 'block';

// }



