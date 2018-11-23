// making request with AJAX
$.ajax({
    url: 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,cell,dob&nat=NZ,US',
    dataType: 'json',
    success: function (data) {
        console.log(`Request con Ajax:`, data);
    }
});

//Creando un array donde se guardara la respuesta de Fetch, haciendo esta una variable global
let empleados = []

// Seleccionando y guardando en una variable el contenedor donde se imprimira la galeria
const gallery = document.querySelector('.gallery')

// making request with FETCH    
fetch('https://randomuser.me/api/?results=12')
    .then(res => res.json())
    .then(data =>  {
        // La respuesta de fetch se asigna al array 'empleados'
        empleados = data.results 
        console.log(`Request con Fetch:`, empleados)
        // funcion callback
        mockup(); 

    })

// Esta funcion se ejecuta cuando Fetch resuelve la promesa
function mockup() {
    let html = '';
    for (let i = 0; i < empleados.length; i += 1) {
        console.log(empleados.length)
//En el metodo printModal() se pasa por parametro el index de array empleados obtenido de la 
//iteracion con el ciclo 'for' y  guardado con el nombre de la variable 'i'
        html +=
            `   <div class="card" onClick="printModal('${i}')">
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
        // 
        gallery.innerHTML = html;
    }
}


// Selecionando y guardando el container donde estara el formulario de busqueda
const formContainer = document.querySelector('.search-container')
// Creando el formulario de busqueda
const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>`
//Agregandolo al documento
formContainer.innerHTML = formBrowser;

//Seleccionando y alamcenando en variables los dos text input del buscador
const searchInput = document.getElementById('search-input');
const submit = document.getElementById('search-submit');

//Agregando el eventListener al boton 'submit'
submit.addEventListener('click', ()=>{
//Guardando el valor que el cliente escriba en el campo searchInput 
    let empleado = searchInput.value.toLowerCase()
// Ejecutando la  funcion filter y pasando por parametro la variable 'empleado' 
    filter (empleado)
})

function filter(empleado) {
//Guardando todos los elementos de la coleccion de empleados
    let card1 = document.querySelectorAll('.card')
// Aplicando un ciclo 'for' para iterar con la coleccion guardada en variable 'card1' 
    for (let i = 0; i < card1.length; i++) {
// En esta linea guardamos el contenido que tiene el elemento con la clase 'card-name'
        let personName = card1[i].querySelector('.card-name').textContent;
// Si el contenido del valor del elemento es '0'? no se despliega nada 
// Y dejamos los elementos tal cual
        if (personName.indexOf(empleado) === 0) {
                console.log(card1[i])
                card1[i].style.display = "";
// De otra forma mostramos los elementos que coincidan con la busqueda del usuario
        } else {
                console.log(card1[i])
                card1[i].style.display = "none";
        }
    }
}

//Funcion que imprime el Modal Container
function printModal(i) {
    //datos = JSON.parse(decodeURI(datos));
    console.log("Modal container works :)")
    
    let modalContainer = `
            <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${empleados[i].picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${empleados[i].name.first}</h3>
                        <p class="modal-text">${empleados[i].email}</p>
                        <p class="modal-text cap">${empleados[i].location.city}</p>
                        <hr>
                            <p class="modal-text">${empleados[i].phone}</p>
                            <p class="modal-text">${empleados[i].location.city} , ${empleados[i].location.state}</p>
                            <p class="modal-text">${empleados[i].dob.date}</p>
                    </div>
                </div>


                <div class="modal-btn-container">                   
                    <button type="button" id="modal-prev" class="modal-prev btn" onClick="printModal(${i-1})">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn" onClick="printModal(${i+1})">Next</button>
                </div>
            </div>`
    gallery.innerHTML = modalContainer;
}

// function prevModal(i) {
//     console.log('function prevModal works :)')
//     //datos = JSON.parse(decodeURI(datos[i]));

//     let modalContainer = `
//             <div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="${empleados[i].picture.large}" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">${empleados[i].name.first}</h3>
//                         <p class="modal-text">${empleados[i].email}</p>
//                         <p class="modal-text cap">${empleados[i].location.city}</p>
//                         <hr>
//                             <p class="modal-text">${empleados[i].phone}</p>
//                             <p class="modal-text">${empleados[i].location.city} , ${empleados[i].location.state}</p>
//                             <p class="modal-text">${empleados[i].dob.date}</p>
//                     </div>
//                 </div>


//                 <div class="modal-btn-container">                   
//                     <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal()">Prev</button>
//                     <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal()">Next</button>
//                 </div>
//             </div>`
//     gallery.innerHTML = modalContainer;
// }

// function nextModal(i) {
//     console.log('function nextModal works :)')    
//     //datos = JSON.parse(decodeURI(datos[i]));

//     let modalContainer = `
//             <div class="modal-container">
//                 <div class="modal">
//                     <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
//                     <div class="modal-info-container">
//                         <img class="modal-img" src="${empleados[i].picture.large}" alt="profile picture">
//                         <h3 id="name" class="modal-name cap">${datos.name.first}</h3>
//                         <p class="modal-text">${empleados[i].email}</p>
//                         <p class="modal-text cap">${empleados[i].location.city}</p>
//                         <hr>
//                             <p class="modal-text">${empleados[i].phone}</p>
//                             <p class="modal-text">${empleados[i].location.city} , ${empleados[i].location.state}</p>
//                             <p class="modal-text">${empleados[i].dob.date}</p>
//                     </div>
//                 </div>


//                 <div class="modal-btn-container">                   
//                     <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal()">Prev</button>
//                     <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal()">Next</button>
//                 </div>
//             </div>`
//     gallery.innerHTML = modalContainer;
// }

//Funcion que cierra el Modal Container
function closeModal(i) {
    //datos = JSON.parse(decodeURI(datos));
    console.log('Works closeModal')

    let modalContainerButton = document.querySelector('.modal-container')
    modalContainerButton.style.display = 'none';
    mockup();
    
}



