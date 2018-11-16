$(document).ready( ()=> {
// Hidding the modal content
const modal = document.querySelector('.modal-container');
modal.style.display = 'none'

const container = document.querySelector('.search-container')
    const formBrowser = ` 
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
    </form>`

container.innerHTML = formBrowser;

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
   
//    //const dat = data;
//     dat.each(data.results, function ( index , empl) {
//         const employee = document.querySelector('.card')
//         let html = `
   
//          <div class="card-img-container">
//              <img class="card-img" src="${data.results.picture.medium}" alt="profile picture">
//          </div>
//          <div class="card-info-container">
//              <h3 id="name" class="card-name cap">${dataresults.name.first} , ${data.results.name.last}</h3>
//              <p class="card-text">${data.results.email}</p>
//              <p class="card-text cap">${data.results.location.city}, ${data.results.location.state}</p>
//          </div>
               
//     `
//         employee.innerHTML = html;
//     })

    const gallery = document.querySelector('.gallery')
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
    }   
    
   }
})

