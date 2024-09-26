fetch('https://randomuser.me/api/?results=10')
    .then(function(res){
        return res.json()       
    })
    .then(function(data){
        console.log(data)

        const profilePic = document.querySelector('.profile-pic')
        const name = document.querySelector('.name')
        const location = document.querySelector('.location')

        profilePic.src = data.results[0].picture.large
        name.textContent = data.results[0].name.first
        location.textContent = data.results[0].location.street.name        
    })

const body = document.querySelector('body')
const moonClick = document.querySelector('.moon')

moonClick.addEventListener('click', function() {
    if(document.body.classList.contains('dark-mode')) {
        // Light Theme
        body.classList.remove('dark-mode')
        moonClick.src = "./assets/images/moon.png"
        
    } else {
        // Dark Mode Theme
        body.classList.add('dark-mode')
        moonClick.src = "./assets/images/sun.jpg"
    }
})

