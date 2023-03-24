let presupuesto = parseFloat(prompt("Bienvenido a GYM-STORE la mejor tienda de gimnasios de Argentina !! \n\n ¿Cuanto es el maximo de dinero que está dispuesto a gastar?"));
let gastadoDeMomento = 0;
let articulo;
let precioArticulo;
let resumen = "";

while (gastadoDeMomento <= presupuesto){

    articulo = prompt("Que objeto desea agregar al carrito? (ESC para salir)"); //Mancuernas

    if (articulo.toUpperCase() == "ESC"){ //Salir
        break;
    }

    precioArticulo = parseFloat(prompt("Cual es el precio del objeto?")); // 15000

    gastadoDeMomento += precioArticulo; //Suma de los precios de los articulos
    resumen += (articulo + ": " + "$" + precioArticulo + "\n"); //Resumen de la compra

}

alert ("Llegaste al limite de tu presupuesto, gastaste un total de: $" + gastadoDeMomento + "\n\n" + "Resumen: \n" + resumen)