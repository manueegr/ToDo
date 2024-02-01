let idCounter = 0;
const input = document.querySelector('input[type="text"]');
userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('A task was added'); //Cada que vez que se añada una tarea saldrá un mensaje en consola
    addTask();
});

function addTask() {
    idCounter++;
    let newvalue = input.value;
    //Modificamos elementos HTML
    if(input.value != ''){
        list.innerHTML += `<div class="task-container" id='${idCounter}'>
           
        <label>
            <input type="checkbox">
            ${newvalue}
        </label>
        <i class="fa-duotone fa-trash" id="close-btn"></i>
    </div>`
        input.value = ''; //Borramos contenido del input cada vez que añadamos una tarea
        actualizarStats(); 
    } else {
        window.alert('Escribe algo la caja de texto'); //Si no escribimos nada nos saltará una notificación
    }
}

//Escucha el evento de click en el elemento y ejecuta dicha acción
list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == 'INPUT') {
        actualizarStats();
    } else if (event.srcElement.nodeName == 'I') {
        // console.log('borramos una tarea');
        //console.log(event);
        console.log('task ' + event.srcElement.parentNode.id + ' was deleted');
        deleteTarea(event.srcElement.parentNode.id);
        // window.alert('task ' + event.srcElement.parentNode.id + ' was deleted');
    }
});
/**^para borrar una tarea necesitamos saber el id del elemento */
//Función que actualiza la estadística:
let actualizarStats = () => {
    /**esta variable (elementList)contendrá el valor del elemento stats. al genrarse varios 
     * párrafos tendremos un nodeList y queremos quedarnos con su longitud, 
     * es decir con su cantidad de elementos.*/
    let elementList = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');//m mostrarará todos los elementos input checkbox seleccionados(checked)
    let tareaspendientes = elementList.length - checkbox.length;
    stats.innerHTML = `<p>Tareas pendientes: ${tareaspendientes} Tareas completadas: ${checkbox.length}<p>`
};

//Función para borrar tareas
let deleteTarea = (id) => {
    let tareaBorrada = document.getElementById(id);
    list.removeChild(tareaBorrada);
    actualizarStats();
    alert('task ' + id + ' was deleted');

};