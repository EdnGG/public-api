//$(document).ready( ()=> {
// Hidding the modal content
const modal = document.querySelector('.modal-container');
modal.style.display = 'none'

// const getUser = new Promise(function (allGood, notGood) {

//     setTimeout(function () {
//         notGood('Time is over');
//     }, 3000)
// })

// getUser()
//     .then(function () {
//         console.log('All Good')
//     })
//     .catch(function (message) {
//         console.log(message)
//     })

// Promise.all([
//     getUser,
//     getUser
// ])

$.ajax('https://randomuser.me/api/', {
    method: 'GET',
    success : function(data){
        console.log(data)
    }

})


    fetch('https://randomuser.me/api/')
        .then(function (response){
            console.log(response)
            return response.json()
        })
        .then( (user) => {
            console.log('user', user.results[0].name.first)
        })
        .catch( (error)=> {
            console.log('Error', error)
        });
//})

(async function load() {
    //await
    async function getData(url) {
        const response = await fetch(url)
        const data = await response.json()
        return data;
    }
        
    const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
    const terrorList = await getData('https://yts.am/api/v2/list_movies.json?genre=terror')
    const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
    console.log('ActionList' , actionList)
    console.log('TerrorList', terrorList)
    console.log('AnimationList', animationList)
}) ()