function pedirProducto(){
    var cont = document.getElementById("contenedor");

    var p1 = document.createElement("p");
    p1.innerHTML="x1";
    var contp1 = document.createElement("div");
    contp1.className="multi pt-2";
    contp1.appendChild(p1);

    var est = document.createElement("span");
    est.className="badge badge-warning";
    est.innerHTML="En Cocina";
    var contest = document.createElement("div");
    contest.className="estado";
    contest.appendChild(est);

    var precio = document.createElement("strong");
    precio.innerHTML="5,55€";
    var pprecio = document.createElement("p");
    pprecio.appendChild(precio);
    var contprecio = document.createElement("div");
    contprecio.className="precio pt-2";
    contprecio.appendChild(pprecio);

    var nombre = document.createElement("strong");
    nombre.innerHTML="Bocadillo de pollo";
    var pnombre = document.createElement("p");
    pnombre.appendChild(nombre);
    var contnombre = document.createElement("div");
    contnombre.className="nombre pt-2";
    contnombre.appendChild(pnombre);

    var contPedido = document.createElement("div");
    contPedido.className="container-fluid mt-3 pedido m-0 p-3";
    contPedido.appendChild(contnombre);
    contPedido.appendChild(contprecio);
    contPedido.appendChild(contest);
    contPedido.appendChild(contp1);

    cont.appendChild(contPedido);
    
}

