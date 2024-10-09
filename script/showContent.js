// Variable para rastrear el contenido visible
let currentVisibleContent = null;

function showContent(tagNumber) {
    // Obtener las referencias de los elementos de contenido
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    // Si el contenido seleccionado ya está visible, lo ocultamos
    if (currentVisibleContent === tagNumber) {
        if (tagNumber === 1) {
            content1.style.display = 'none';
        } else if (tagNumber === 2) {
            content2.style.display = 'none';
        }
        // Reseteamos la variable
        currentVisibleContent = null;
    } else {
        // Ocultar todo el contenido
        content1.style.display = 'none';
        content2.style.display = 'none';

        // Mostrar el contenido correspondiente
        if (tagNumber === 1) {
            content1.style.display = 'block';
        } else if (tagNumber === 2) {
            content2.style.display = 'block';
        }

        // Actualizamos la variable para rastrear el contenido visible
        currentVisibleContent = tagNumber;
    }
}

