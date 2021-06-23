
let hamburguers = [{"name": "Burguer King", "image":"images/burguer.jpg","horario": "9:00-20:00","disponibilidad": "40"},
                    {"name": "Pans & Company","image":"images/pans.jpg","horario": "9:00-20:00","disponibilidad": "30"},
                    {"name": "El Barrio","image": "images/barrio.png","horario": "9:00-21:00","disponibilidad": "80"}];

let pizzas = [{"name": "Telepizza","image": "images/telepi.jpg","horario": "9:00-20:00","disponibilidad": "40"},
                {"name": "Carlos Pizzas","image": "images/pizzaCarlos.jpg","horario": "9:00-20:00","disponibilidad": "20"},
                {"name": "Dominos","image": "images/dominos.jpg","horario": "9:00-21:00","disponibilidad": "60"}];

let veggies = [{"name": "La hora perenne","image": "images/hoja.jpg","horario": "9:00-20:00","disponibilidad": "10"},
                {"name": "Don Arbol","image": "images/arbol.jpg","horario": "9:00-20:00","disponibilidad": "100"},
                {"name": "La Abuela","image": "images/abuela.jpg","horario": "9:00-21:00","disponibilidad": "60"}];


let contenedorRestaurantes = document.getElementById("contenedorRestaurantes");

window.onload=setAllRestaurants;

function setAllRestaurants(){

    clearDiv();
    setHamburguers();
    setPizzas();
    setVeggies();

}



function setHamburguerRestaurants(){
    clearDiv();

    setHamburguers();

}

function setPizzaRestaurants(){

    clearDiv();

    setPizzas();
}

function setAsiaticoRestaurants(){
    clearDiv();
    setError();
}

function setVeggieRestaurants(){
    clearDiv();
    setVeggies();
}


function setPizzas(){
    for(i in pizzas){
        let current = pizzas[i];
        let titulo = document.createElement("h5");
        titulo.className="float-left";
        titulo.innerHTML=current.name;

        let horario = document.createElement("h6");
        horario.className="float-right";
        horario.innerHTML=current.horario;
        contenedorRestaurantes.append(horario);

        let contenedorNombreHorario=document.createElement("div");
        contenedorNombreHorario.className="container-fluid pt-3 pl-3 pr-3 card-title clearfix mb-0";
        contenedorNombreHorario.append(titulo);
        contenedorNombreHorario.append(horario);
    
        let progressBar=document.createElement("div");
        if(current.disponibilidad>30){
            progressBar.className="progress-bar bg-success";
        }else{
            progressBar.className="progress-bar bg-danger";
        }
    
        progressBar.style="width:" + current.disponibilidad + "%";
        progressBar.innerHTML= current.disponibilidad + "%";

        let contenedorProgress=document.createElement("div");
        contenedorProgress.className="progress";
        contenedorProgress.append(progressBar);

    
        let small=document.createElement("small");
        small.innerHTML="Disponibilidad";

        let contenedorDisponibilidad = document.createElement("div");
        contenedorDisponibilidad.className="card-text pl-3 pr-3 pb-3 mt-0";
        contenedorDisponibilidad.append(small);
        contenedorDisponibilidad.append(contenedorProgress);

        let contenedorCuerpoCarta=document.createElement("div");
        contenedorCuerpoCarta.className="card-body p-0";
        contenedorCuerpoCarta.append(contenedorNombreHorario);
        contenedorCuerpoCarta.append(contenedorDisponibilidad);

        let imagen=document.createElement("img");
        imagen.className="card-img-top";
        imagen.src=current.image;

        let carta=document.createElement("div");
        carta.className="card";
        carta.append(imagen);
        carta.append(contenedorCuerpoCarta);

        let columna = document.createElement("div");
        columna.className="col mb-4";
        columna.append(carta);

        let link = document.createElement("a");
        link.href="restaurantInfo.html";
        link.append(columna);

        contenedorRestaurantes.append(link);
    }
}

function setError(){

    let anuncio = document.createElement("strong");
    anuncio.innerHTML="No se han encontrado restaurantes";

    let alerta = document.createElement("div");
    alerta.className="alert alert-danger alert-dismissible fade show";
    alerta.append(anuncio);

    contenedorRestaurantes.append(alerta);
}

function setHamburguers(){
    for(i in hamburguers){
        let current = hamburguers[i];
        let titulo = document.createElement("h5");
        titulo.className="float-left";
        titulo.innerHTML=current.name;

        let horario = document.createElement("h6");
        horario.className="float-right";
        horario.innerHTML=current.horario;
        contenedorRestaurantes.append(horario);

        let contenedorNombreHorario=document.createElement("div");
        contenedorNombreHorario.className="container-fluid pt-3 pl-3 pr-3 card-title clearfix mb-0";
        contenedorNombreHorario.append(titulo);
        contenedorNombreHorario.append(horario);
    
        let progressBar=document.createElement("div");
        if(current.disponibilidad>30){
            progressBar.className="progress-bar bg-success";
        }else{
            progressBar.className="progress-bar bg-danger";
        }
    
        progressBar.style="width:" + current.disponibilidad + "%";
        progressBar.innerHTML= current.disponibilidad + "%";

        let contenedorProgress=document.createElement("div");
        contenedorProgress.className="progress";
        contenedorProgress.append(progressBar);

    
        let small=document.createElement("small");
        small.innerHTML="Disponibilidad";

        let contenedorDisponibilidad = document.createElement("div");
        contenedorDisponibilidad.className="card-text pl-3 pr-3 pb-3 mt-0";
        contenedorDisponibilidad.append(small);
        contenedorDisponibilidad.append(contenedorProgress);

        let contenedorCuerpoCarta=document.createElement("div");
        contenedorCuerpoCarta.className="card-body p-0";
        contenedorCuerpoCarta.append(contenedorNombreHorario);
        contenedorCuerpoCarta.append(contenedorDisponibilidad);

        let imagen=document.createElement("img");
        imagen.className="card-img-top";
        imagen.src=current.image;

        let carta=document.createElement("div");
        carta.className="card";
        carta.append(imagen);
        carta.append(contenedorCuerpoCarta);

        let columna = document.createElement("div");
        columna.className="col mb-4";
        columna.append(carta);

        let link = document.createElement("a");
        link.href="restaurantInfo.html";
        link.append(columna);

        contenedorRestaurantes.append(link);
    }
}

function setVeggies(){
    for(i in veggies){
        let current = veggies[i];
        let titulo = document.createElement("h5");
        titulo.className="float-left";
        titulo.innerHTML=current.name;

        let horario = document.createElement("h6");
        horario.className="float-right";
        horario.innerHTML=current.horario;
        contenedorRestaurantes.append(horario);

        let contenedorNombreHorario=document.createElement("div");
        contenedorNombreHorario.className="container-fluid pt-3 pl-3 pr-3 card-title clearfix mb-0";
        contenedorNombreHorario.append(titulo);
        contenedorNombreHorario.append(horario);
    
        let progressBar=document.createElement("div");
        if(current.disponibilidad>30){
            progressBar.className="progress-bar bg-success";
        }else{
            progressBar.className="progress-bar bg-danger";
        }
    
        progressBar.style="width:" + current.disponibilidad + "%";
        progressBar.innerHTML= current.disponibilidad + "%";

        let contenedorProgress=document.createElement("div");
        contenedorProgress.className="progress";
        contenedorProgress.append(progressBar);

    
        let small=document.createElement("small");
        small.innerHTML="Disponibilidad";

        let contenedorDisponibilidad = document.createElement("div");
        contenedorDisponibilidad.className="card-text pl-3 pr-3 pb-3 mt-0";
        contenedorDisponibilidad.append(small);
        contenedorDisponibilidad.append(contenedorProgress);

        let contenedorCuerpoCarta=document.createElement("div");
        contenedorCuerpoCarta.className="card-body p-0";
        contenedorCuerpoCarta.append(contenedorNombreHorario);
        contenedorCuerpoCarta.append(contenedorDisponibilidad);

        let imagen=document.createElement("img");
        imagen.className="card-img-top";
        imagen.src=current.image;

        let carta=document.createElement("div");
        carta.className="card";
        carta.append(imagen);
        carta.append(contenedorCuerpoCarta);

        let columna = document.createElement("div");
        columna.className="col mb-4";
        columna.append(carta);

        let link = document.createElement("a");
        link.href="restaurantInfo.html";
        link.append(columna);

        contenedorRestaurantes.append(link);
    }
}

//FUNCION PARA ELEMINAR TODOS LOS RESTAURANTES DEL CONTENEDOR
function clearDiv(){
    //borramos el contenedor de restaurantes
    while (contenedorRestaurantes.firstChild){
        contenedorRestaurantes.removeChild(contenedorRestaurantes.firstChild);
    }
    
}