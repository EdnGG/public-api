// making request with AJAX
$.ajax({
    url: 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,cell,dob&nat=NZ,US',
    dataType: 'json',
    success: function (data) {
        //console.log(`Request con Ajax:`, data);
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
        //La respuesta de fetch se asigna al array 'empleados'
        empleados = data.results 
        //console.log(`Request con Fetch:`, empleados)
        //Funcion callback que se encargara de pintar los empleados de la galeria
        mockup(); 
})
    
// Esta funcion se ejecuta cuando Fetch resuelve la promesa
function mockup() {
    let html = '';
        for (let i = 0; i < empleados.length; i += 1) {
            //console.log(empleados.length)
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
                        <p class="card-text cap">${empleados[i].location.city}</p>
                    </div>
                </div>
            `
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
    let card1 = document.querySelectorAll('.card')
        for (let i = 0; i < card1.length; i++) {
            let personName = card1[i].querySelector('.card-name').textContent;
                if (personName.indexOf(empleado) === 0) {
                    console.log(card1[i])
                    card1[i].style.display = "";
                } else {
                    console.log(card1[i])
                    card1[i].style.display = "none";
                }
        }
}

//Funcion que imprime el Modal Container

let modalC = document.createElement('div')
function printModal(i) {
    //console.log("Modal container works :)")
    let birthday = empleados[i].dob.date;
    birthday = birthday.substring(0, birthday.indexOf('T'));
    let modalContainer = `
            <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn" onClick="closeModal()"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${empleados[i].picture.large}" alt="profile picture">
                        <h3 id="name" class="modal-name cap">${empleados[i].name.first}, ${empleados[i].name.last}</h3>
                        <p class="modal-text">${empleados[i].email}</p>
                        <p class="modal-text cap">${empleados[i].location.state}</p>
                        <hr>
                            <p class="modal-text">Phone: ${empleados[i].phone}</p>
                            <p class="modal-text">${empleados[i].location.street}, ${empleados[i].location.city}, ${empleados[i].location.state}, ${empleados[i].location.postcode}</p>
                            <p class="modal-text">Birthday: ${birthday}</p>
                    </div>
                </div>


                <div class="modal-btn-container">                   
                    <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal(${i})">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal(${i})">Next</button>
                </div>
            </div>`
                    //<button type="button" id="modal-prev" class="modal-prev btn" onClick="printModal(${i-1})">Prev</button>
                    //<button type="button" id="modal-next" class="modal-next btn" onClick="printModal(${i+1})">Next</button>
    modalC.innerHTML = modalContainer;
    gallery.parentNode.insertBefore(modalC, gallery)
    modalC.style.display = 'block'
}
function prevModal(i) {
    //console.log('function prevModal works :)')
    if (i === 0){
        i = 12;
        printModal(i-1);
        //console.log('heyPrev')
    } else {
        printModal( i-1)
    }
}
function nextModal(i) {
    //console.log('function nextModal works :)')    
    if (i === 11) {
        i = -1;
        printModal(i+1);
        //console.log('heyNext')
    } else {
        printModal(i+1);
    }
}
//Funcion que cierra el Modal Container
function closeModal() {
    //console.log('Works closeModal')
    mockup();
    modalC.style.display = 'none'
}



