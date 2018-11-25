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
        //La respuesta de fetch se asigna al array 'empleados'
        empleados = data.results 
        console.log(`Request con Fetch:`, empleados)
        //Funcion callback que se encargara de pintar los empleados de la galeria
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


//=================Starting Event Listener for Form Submit========================//
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
//=================Finishing Listener for Form Submit========================//

 

function filter(empleado) {
//Guardando todos los elementos de la coleccion de empleados
    let card1 = document.querySelectorAll('.card')

//Aplicando un ciclo 'for' para iterar con la coleccion guardada en variable 'card1' 
    for (let i = 0; i < card1.length; i++) {

//En esta linea guardamos el contenido que tiene el elemento con la clase 'card-name'
        let personName = card1[i].querySelector('.card-name').textContent;

//Si el contenido del valor del elemento es '0'? no se despliega nada 
//Y dejamos los elementos tal cual
        if (personName.indexOf(empleado) === 0) {
                console.log(card1[i])
                card1[i].style.display = "";

//De otra forma mostramos los elementos que coincidan con la busqueda del usuario
        } else {
                console.log(card1[i])
                card1[i].style.display = "none";
        }
    }
}

//Funcion que imprime el Modal Container
function printModal(i) {
    console.log("Modal container works :)")
    let birthday = empleados[i].dob.date;
    birthday = birthday.substring(0, birthday.indexOf('T'));
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
                            <p class="modal-text">${birthday}</p>
                    </div>
                </div>


                <div class="modal-btn-container">                   
                    <button type="button" id="modal-prev" class="modal-prev btn" onClick="prevModal(${i})">Prev</button>
                    <button type="button" id="modal-next" class="modal-next btn" onClick="nextModal(${i})">Next</button>
                </div>
            </div>`
    gallery.innerHTML = modalContainer;
}

//<button type="button" id="modal-prev" class="modal-prev btn" onClick="printModal(${i-1})">Prev</button>
//<button type="button" id="modal-next" class="modal-next btn" onClick="printModal(${i+1})">Next</button>

function prevModal(i) {
    console.log('function prevModal works :)')

//Aqui va a mostrar el elemento anterior en el que se encuentra ahora
    printModal(i - 1);
    
    if ( i === 1){
//Aqui se le asigna un nuevo valor a 'i' que va a contener el numero 
//total de empleados 
        i = 11;
//aqui se llama a la function 'printModal()' ya con el nuevo valor de 'i' - 1
//que da como resultado el ultimo elemento del array 'empleados'
        printModal(i -1);
        console.log('heyPrev')
        
    }
}

function nextModal(i) {
    console.log('function nextModal works :)')    

    printModal( i + 1);
    if (i === 10) {
        i = 0;
        printModal(i + 1);
        console.log('heyNext')
    }
}

//Funcion que cierra el Modal Container
function closeModal() {
  console.log('Works closeModal')
    let modalContainerButton = document.querySelector('.modal-container')
    modalContainerButton.style.display = 'none';
    mockup();
    
}



