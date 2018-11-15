$(document).ready( ()=> {
// Hidding the modal content
const modal = document.querySelector('.modal-container');
modal.style.display = 'none'

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
        console.log(`Request con Fetch:`, data.results)
        //$.each(data.results, function ( index , empl) {
        

        //})
        mokUp(data.results[0])
        
})

function mokUp (data)  {
    const employee = document.querySelector('.card')
    const html = `
   
         <div class="card-img-container">
             <img class="card-img" src="${data.picture.medium}" alt="profile picture">
         </div>
         <div class="card-info-container">
             <h3 id="name" class="card-name cap">${data.name.first} , ${data.name.last}</h3>
             <p class="card-text">${data.email}</p>
             <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
         </div>
               
    `
    employee.innerHTML = html;
}


        

})

