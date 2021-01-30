
window.ContainerCard = ()=>[
    fetch ('http://localhost:3000/userdata', {
        method : 'GET', 
        mode : 'cors',
        headers : {
            "Content-Type" : "application/json",
        }
    })
    .then( (res) => res.json())
    .then( (data) => {
       data.map((e) => {
        document.getElementById("root").innerHTML += `
            <div class='card'>
                <h3>${e.username}</h3>
                <h5>${e.email}</h5>
                <img src='${e.avatar}' width='300px' />
            </div>
        `
            
       })
       
    })
]

window.updater = ()=> {
    document.getElementById('root').innerHTML = `
    ${ContainerCard()}
        <h1>Hello From JS..</h1>
    `
}

updater()

export default updater