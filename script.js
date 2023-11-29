document.addEventListener("DOMContentLoaded", function () {
    const tipoBtns = document.querySelectorAll(".tipoBtn");
    const generarCaracteristicasBtn = document.getElementById("generarCaracteristicasBtn");
    const caracteristicasGeneradas = document.getElementById("caracteristicasGeneradas");

    let tipoSeleccionado = null;

    tipoBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            tipoSeleccionado = btn.dataset.tipo;
            generarCaracteristicasBtn.style.display = "block";
        });
    });

    generarCaracteristicasBtn.addEventListener("click", function () {
        if (tipoSeleccionado) {
            const caracteristicas = generarCaracteristicas(tipoSeleccionado);
            caracteristicasGeneradas.textContent = `Características de ${tipoSeleccionado}: ${caracteristicas}`;
        } else {
            alert("Por favor, selecciona un tipo antes de generar características.");
        }
    });

    function generarCaracteristicas(tipo) {
        const caracteristicasPorTipo = {
            objeto:[
                "Celular", "Vestido", "Destornillador", "Taza", "Guitarra",
                "Sombrero", "Silla", "Avión", "Libro", "Reloj", "Cámara", "Zapatillas",
                "Helado", "Bolsa", "Lápiz", "Computadora", "Paraguas", "Bicicleta", "Globo",
                "Gafas", "Teclado", "Lámpara", "Árbol", "Coche", "Globo terráqueo", "Piano",
                "Perfume", "Bolígrafo", "Tren", "Camiseta", "Pescado", "Bañador", "Hamburguesa",
                "Micrófono", "Bolso", "Patineta", "Escoba", "Lupa", "Ratón", "Cepillo de dientes",
                "Pelota", "Altavoz", "Platillo volador", "Vela", "Espejo", "Bol", "Mapa",
                "Rana", "Bastón", "Sandalia", "Helicóptero"],
            // cosas de escena
            escena_fondo: [
                "Castillo", "Lago", "Bosque", "Montaña", "Desierto", "Ciudad", "Playa", "Cielo estrellado",
                "Pradera", "Selva", "Universo", "Océano", "Paisaje urbano", "Volcán", "Cascada", "Campo de girasoles",
                "Invierno", "Puesta de sol", "Aurora boreal", "Espacio exterior", "Submarino", "Nebulosa", "Valle",
                "Fábrica abandonada", "Planeta lejano", "Marte", "Cueva misteriosa", "Acantilado", "Jardín secreto",
                "Castillo en las nubes", "Laberinto", "Fiesta en el bosque", "Pueblo medieval", "Estación espacial",
              ],
            escena_objeto_primer_plano: [
                "Casa", "Vaso", "Libro abierto", "Reloj de arena", "Candelabro", "Lupa", "Mapa del tesoro",
                "Telescopio", "Sombrero de mago", "Brújula", "Reloj antiguo", "Cámara antigua", "Llave dorada",
                "Búho de cerámica", "Globo terráqueo antiguo", "Pluma y tintero", "Prisma de cristal", "Pergamino",
                "Cofre del tesoro", "Corona real", "Collar de gemas", "Varita mágica", "Calavera", "Pistón",
                "Plato con frutas", "Reloj de bolsillo", "Lupa antigua", "Pluma estilográfica", "Candelabro de cristal",
                "Caja de música", "Bolsa de monedas", "Anteojo de pirata", "Martillo de juez", "Teclado de piano",
                "Gafas de lectura", "Taza de té antigua", "Máscara de carnaval", "Barco en una botella",
                "Baraja de cartas", "Escalera de caracol", "Cuchillo de mariposa", "Guitarra clásica", "Silla antigua",
                "Máquina de escribir", "Estilográfica antigua", "Globo de cristal", "Reloj de péndulo", "Vela encendida",
              ]
        };

        let caracteristicas = "";

        if (tipo === "escena") {
            caracteristicas += generarCaracteristicaAleatoria(caracteristicasPorTipo.escena_fondo) + " - ";
            caracteristicas += generarCaracteristicaAleatoria(caracteristicasPorTipo.escena_objeto_primer_plano);
        } else {
            caracteristicas = generarCaracteristicaAleatoria(caracteristicasPorTipo[tipo]);
        }

        return caracteristicas;
    }

    function generarCaracteristicaAleatoria(lista) {
        const randomIndex = Math.floor(Math.random() * lista.length);
        return lista[randomIndex];
    }
});
