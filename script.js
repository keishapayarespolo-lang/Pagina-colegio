function mostrarInfo() {
    document.getElementById("informacion").innerHTML =
        "<h3>Conoce nuestra institucion!</h3>" +
        "<p>Un lugar para aprender, compartir y prepararte para el futuro.</p>";
}

function verPrograma(nombre) {

    let informacion = {
        "Salud": `
            <h2>Programa de Salud</h2>
            <p>Aprende sobre el cuidado de las personas, la prevencion de enfermedades y la promocion de habitos saludables.</p>
            <p>Desarrolla conocimientos relacionados con el bienestar y la atencion a la comunidad.</p>
        `,

        "Programacion": `
            <h2>Programa de Programacion</h2>
            <p>Conoce el mundo de la tecnologia, los lenguajes de programacion y el desarrollo de paginas web.</p>
            <p>Aprende a crear soluciones digitales y desarrollar proyectos tecnologicos.</p>
        `,

        "Arte": `
            <h2>Programa de Arte</h2>
            <p>Desarrolla tu creatividad mediante diferentes expresiones artisticas.</p>
            <p>Fortalece tus habilidades de dibujo, imaginacion y expresion cultural.</p>
        `,

        "Quimica Industrial": `
            <h2>Programa de Quimica Industrial</h2>
            <p>Conoce los procesos quimicos utilizados en diferentes industrias.</p>
            <p>Aprende sobre experimentacion, analisis de materiales y conocimientos cientificos.</p>
        `,

        "Comunicacion": `
            <h2>Programa de Comunicacion</h2>
            <p>Fortalece tus habilidades para expresar ideas y transmitir informacion.</p>
            <p>Desarrolla conocimientos relacionados con los medios de comunicacion y la creacion de contenidos.</p>
        `
    };

    let resultado = document.getElementById("info-programa");

    if (informacion[nombre]) {
        resultado.innerHTML = informacion[nombre] +
        '<br><button onclick="cerrarInformacion()">Cerrar informacion</button>';

        resultado.scrollIntoView({ behavior: "smooth" });
    }
}

function cerrarInformacion() {
    document.getElementById("info-programa").innerHTML = "";
}

function contacto() {
    document.getElementById("mensaje-contacto").innerHTML =
        "Gracias por tu interes! Acercate a la institucion para conocer los requisitos de ingreso.";
}

function mostrarPregunta(tipo) {

    let resultado = document.getElementById("respuesta-pregunta");

    // Si se vuelve a tocar la misma pregunta, se oculta
    if (resultado.dataset.tipo === tipo) {
        resultado.innerHTML = "";
        resultado.dataset.tipo = "";
        return;
    }

    let respuesta = "";

    if (tipo === "ingreso") {
        respuesta = `
            <h3>Como puedo ingresar?</h3>
            <p>El proceso se gestiona conjuntamente entre los colegios oficiales locales y la Secretaria de Educacion del Departamento del Atlantico. Puedes acercarte a la institucion para consultar la disponibilidad de cupos y conocer los documentos necesarios para formalizar la matricula.</p>
        `;
    }

    else if (tipo === "programas") {
        respuesta = `
            <h3>Que programas ofrecemos?</h3>
            <p>Contamos con cinco programas tecnicos: Salud, Programacion, Arte, Quimica Industrial y Comunicacion. Puedes elegir el que mas se adapte a tus intereses al ingresar a grado decimo.</p>
        `;
    }

    else if (tipo === "visita") {
        respuesta = `
            <h3>Puedo conocer el colegio?</h3>
            <p>claro! Puedes acercarte a nuestra institucion para conocer sus instalaciones y espacios de aprendizaje.</p>
        `;
    }

    resultado.innerHTML = respuesta;
    resultado.dataset.tipo = tipo;
}