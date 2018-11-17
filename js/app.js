$(document).ready( ()=> {

// Creating the modal container
    
const gallery = document.querySelector('.gallery')
const body = document.querySelector('body')
const modalContainer = `
<div class="modal-container" >
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
                <p class="modal-text">(555) 555-5555</p>
                <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
        </div>
    </div>

                
    <div class="modal-btn-container">                   
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
</div>`
gallery.innerHTML = modalContainer;

// Creating and apendding the Input serch Element
const formContainer = document.querySelector('.search-container')
    const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>`

formContainer.innerHTML = formBrowser;
// finish the snippe code of Creating and apendding the Input serch Element


// making request with AJAX
$.ajax({
        url: 'https://randomuser.me/api/?results=12&inc=name,location,email,picture,cell,dob&nat=NZ,US',
        dataType: 'json',
        success: function (data) {
            console.log(`Request con Ajax:`, data);
        }
});

    
// making request with FETCH    
fetch('https://randomuser.me/api/?results=12') 
    .then(res => res.json())
    .then(data => { 
        const datos = data.results;
        console.log(`Request con Fetch:`, datos)
        mockup(datos) // callback function

})

function mockup (datos)  {
    //const gallery = document.querySelector('.gallery')
    let html = '';
        for( let i = 0; i < datos.length; i+= 1) {
           console.log(datos.length)
            html += 
            `
            <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${datos[i].picture.medium}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${datos[i].name.first} , ${datos[i].name.last}</h3>
                <p class="card-text">${datos[i].email}</p>
                <p class="card-text cap">${datos[i].location.city}, ${datos[i].location.state}</p>
            </div>
            </div>
            `
            gallery.innerHTML = html;
            console.log(html)

            // function dos () {
            //     const html2 = document.querySelectorAll('.card');
            //     html2.addEventListener('click', () => {
            //         alert("works");
            //     })
            //}
            
            
        }   

    //let html2 = document.querySelectorAll('.card');
        
        // //let html2 = document.querySelectorAll('.card');
        // html2.addEventListener('click', ()=> {
        // alert("works");
        // })

}

let allCards = document.querySelectorAll('.card');



       
})

