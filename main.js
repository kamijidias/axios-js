const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(response.data)
        })
        .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, )
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.userID
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = {
    name: "The Kamiji",
    avatar: "https://picsum.photos/200/300",
    city: "São Paulo"
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(3)

getUsers()
getUser(3)

const newUser = {
    name: "Andrew",
    avatar: "https://picsum.photos/200/300",
    city: "Santa Catarina"
}

//addNewUser()
//updateUser(3, userUpdated)