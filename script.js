// 1. Selección de elementos del DOM mediante sus ID
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// 2. Función para añadir una nueva tarea
function addTask() {
    // Validación: Verifica si el campo de texto está vacío
    if (inputBox.value === '') {
        alert("¡Debes escribir algo primero!");
    } else {
        // Crea un nuevo elemento de lista <li>
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Crea el botón/icono de cierre (span) para eliminar la tarea
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Código Unicode para el carácter '×'
        (multiplicación / cruz)
        li.appendChild(span);
    }

    // Limpia el campo de entrada después de agregar la tarea
    inputBox.value = "";

    // Guarda el estado actualizado en el almacenamiento local
    saveData();
}
// 3. Listener para gestionar clics dentro del contenedor de la lista

listContainer.addEventListener("click", function (e) {
    // Si se hace clic sobre un elemento <li>
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    // Si se hace clic sobre el elemento <span> (icono de la cruz)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// 4. Funciones de Persistencia con LocalStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
// Inicialización: Muestra las tareas guardadas al cargar la página
showTask();