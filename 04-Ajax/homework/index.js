
//funcion integrada dentro del addEventListener
document.getElementById('boton').addEventListener('click', function(data){
    //elimina la lista anterior si es que hay
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
    //eliminar la imagen de loading cuando ya se cargo la lista
    let img = document.getElementsByTagName('img');
        if(img.length > 0){
            img[0].remove();
        }
    //traigo los amigos del server y creo la lista
    fetch( 'http://localhost:5000/amigos') // hace una peticion al servidor
    .then(data => data.json())
    .then(data =>{ //tengo un array con la lista de amigos
        data.forEach(amigo => { // recorro el array de amigos
            var li = document.createElement('li');
            li.textContent = amigo.name;
            document.getElementById('lista').appendChild(li);
            
        });

    })


});
//busco amigo por id
function searchFriend(){
    let id = document.getElementById('input').value;
    fetch(`http://localhost:5000/amigos/${id}`)
    .then(data => data.json())
    .then(data =>{
        document.getElementById('amigo').textContent = data.name; // puse el name dentro del span
    })
    document.getElementById('input').value = ''; // limpia el input
}

//ahora vamos a hacer la funcion fuera del addEventListener para ver como queda

document.getElementById('search').addEventListener('click', searchFriend);

//borra amigos por id

function deleteFriends(){
    let id = document.getElementById('inputDelete').value;
    fetch(`http://localhost:5000/amigos/${id}`, {
        method: 'DELETE'
    })
    .then(() =>{
        alert('El amigo fue borrado');
    })
    document.getElementById('inputDelete').value = '';
}

document.getElementById('delete').addEventListener('click', deleteFriends);