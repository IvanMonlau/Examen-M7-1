const pendientesList = document.getElementById('tareasPendientes');
const hechasList = document.getElementById('tareasHechas');
const nuevaTareaInput = document.getElementById('nuevaTarea');
const formPendiente = document.getElementById('formPendiente');

// Función para crear un elemento de lista
function crearTarea(texto) {
    const li = document.createElement('li');
    li.textContent = texto;
    // Agregar un botón de eliminar (opcional)
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'X';
    botonEliminar.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(botonEliminar);
    return li;
}

// Agregar una tarea pendiente
formPendiente.addEventListener('submit', (event) => {
    event.preventDefault();
    const nuevaTarea = nuevaTareaInput.value;
    if (nuevaTarea) {
        const li = crearTarea(nuevaTarea);
        pendientesList.appendChild(li);
        nuevaTareaInput.value = '';
    }
});

// Mover una tarea de pendientes a hechas
pendientesList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const tarea = event.target;
        hechasList.appendChild(tarea);
    }
});

// Eliminar una tarea (tanto pendientes como hechas)
// (Puedes agregar un evento de clic al botón eliminar)