let cantidadSeleccionada = 0;
let precioSeleccionado = 0;

function seleccionarPack(cantidad, precio) {

    cantidadSeleccionada = cantidad;
    precioSeleccionado = precio;

    const resumen = document.getElementById("pack-seleccionado");

    resumen.innerHTML = `
        <strong>${cantidad} tarjetas NFC</strong>
        <br>
        <span class="precio-pedido">${precio} €</span>
        <br>
        <small>
            ${(precio / cantidad).toFixed(2)} € por tarjeta
        </small>
    `;

    document.getElementById("pedido").scrollIntoView({
        behavior: "smooth"
    });
}


const formulario = document.getElementById("formulario-pedido");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    if (cantidadSeleccionada === 0) {
        alert("Primero selecciona un pack.");
        return;
    }

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigo-postal").value;

    const asunto =
        "Nuevo pedido - " +
        cantidadSeleccionada +
        " tarjetas NFC";

    const mensaje =
        "NUEVO PEDIDO DE TARJETAS NFC\n\n" +
        "DATOS DEL CLIENTE\n" +
        "Nombre: " + nombre + "\n" +
        "Email: " + email + "\n" +
        "Teléfono: " + telefono + "\n\n" +
        "DIRECCIÓN DE ENVÍO\n" +
        direccion + "\n" +
        ciudad + "\n" +
        codigoPostal + "\n\n" +
        "PEDIDO\n" +
        "Cantidad: " + cantidadSeleccionada + " tarjetas\n" +
        "Total: " + precioSeleccionado + " €\n" +
        "Precio por tarjeta: " +
        (precioSeleccionado / cantidadSeleccionada).toFixed(2) +
        " €\n\n" +
        "El cliente realizará el pago por Bizum de forma manual.";

    const enlaceEmail =
        "mailto:marcowp2007@gmail.com" +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(mensaje);

    window.location.href = enlaceEmail;
});
