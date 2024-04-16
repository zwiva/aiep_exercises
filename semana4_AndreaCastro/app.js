let dateText = document.getElementById('date');
let timeText = document.getElementById('time');

// fecha en texto:
let date = new Date();
const options = {
    weekday: 'short',
    month: 'short',
    year: 'numeric',
    day: 'numeric',
};
const fecha = date.toLocaleDateString('es-CL', options);
dateText.innerHTML = fecha;

// reloj:
let today = String(new Date());
let now = today.split(' ')[4];
// console.log('ahora', now);

let hours = Number(now.split(':')[0]);
let minutes = Number(now.split(':')[1]);
let seconds = Number(now.split(':')[2]);

let runClock = () => {
    seconds += 1;
    if (seconds > 59) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes > 59) {
        minutes = 0;
        hours += 1;
    }
    timeText.innerHTML = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
setInterval(runClock, 1000);

// captura data formulario contacto 
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    console.log('nombre: ', document.selectForm.clientname.value);
    console.log('mensaje: ', document.selectForm.clientmsg.value);
});
