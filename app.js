console.log('run js');
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

let generalNews = 0;
let sportNews = 0;
let businessNews = 0;
let allNews = 0;

let getAmountArticles = () => {
    let generalElements = [];
    let sportsElements = [];
    let businessElements = [];
    let allArticles = [];
    allArticles = document.querySelectorAll('article');
    for (let index = 0; index < allArticles.length; index++) {
        const element = allArticles[index];
        if (element.id.includes('grl')) generalElements.push(element);
        if (element.id.includes('spr')) sportsElements.push(element);
        if (element.id.includes('bsn')) businessElements.push(element);
    }
    let numGeneral = document.getElementById('numgeneral');
    numGeneral.innerHTML = generalElements.length;
    generalNews = generalElements.length;
    let numSport = document.getElementById('numsports');
    numSport.innerHTML = sportsElements.length;
    sportNews = sportsElements.length;
    let numBusiness = document.getElementById('numbusiness');
    numBusiness.innerHTML = businessElements.length;
    businessNews = businessElements.length;
    let numAll = document.getElementById('numall');
    numAll.innerHTML = allArticles.length;
}
getAmountArticles(); // primera carga

let generateNewArticle = () => {
    let inputTitle = document.getElementById('newtitle').value;
    // console.log('title: ', inputTitle);
    let inputDetail = document.getElementById('newdetail').value;
    // console.log('detail: ', inputDetail);
    let sectionSelected = document.getElementById('tiponoticia').value;
    // console.log('section', sectionSelected);
    let article = document.createElement('article');
    article.className = 'article__body';
    if (sectionSelected === 'General') {
        article.id = `${'grl'}${generalNews+1}`;
        let section = document.getElementById('grlsection');
        section.appendChild(article);
    }
    if (sectionSelected === 'Deportes') {
        article.id = `${'spr'}${sportNews+1}`;
        let section = document.getElementById('sprsection');
        section.appendChild(article);
    }
    if (sectionSelected === 'Negocios') {
        article.id = `${'bsn'}${businessNews+1}`;
        let section = document.getElementById('bsnsection');
        section.appendChild(article);
    }
    article.innerHTML = `
    <div>
        <h3>${inputTitle}</h3>
        <h4>${sectionSelected}</h4>
        <p>
            ${inputDetail}
            <br>
            <a target="_blank"
                href="https://www.latercera.com/">Ir
                a la noticia
            </a>
        </p>
    </div>
    <div class="article__media">
        <video class="article__media--video" controls>
            <source
                src="https://www.shutterstock.com/shutterstock/videos/1076498990/preview/stock-footage-top-down-footage-of-a-busy-corporate-office-with-tow-rows-off-businessmen-and-businesswomen-working.webm"
                type="video/webm">
            <source
                src="https://www.shutterstock.com/shutterstock/videos/1076498990/preview/stock-footage-top-down-footage-of-a-busy-corporate-office-with-tow-rows-off-businessmen-and-businesswomen-working.mp4"
                type="video/mp4">
        </video>
        <audio class="article__media--audio" controls>
            <source src="assets/audio/bullicio.mp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
    </div>
    `;
    let form = document.getElementById('formadd');
    // console.log('form', form);
    let creator = document.getElementById('creator')
    creator.removeChild(form);
    getAmountArticles();
}

let showFormAddArticle = () => {
    let sectionForm = document.getElementById('creator');
    sectionForm.style.display = 'flex';
    sectionForm.style.justifyContent = 'center';
    let form = document.createElement('form');
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.justifyContent = 'center';
    form.style.width = '50%';
    form.id = 'formadd';
    form.onsubmit = function (f) {
        f.preventDefault();
    }
    sectionForm.appendChild(form);
    let selectSection = document.createElement('select');
    selectSection.id = 'tiponoticia';
    let generalSection = document.createElement('option');
    let sportSection = document.createElement('option');
    let businessSection = document.createElement('option');
    generalSection.innerHTML = 'General';
    sportSection.innerHTML = 'Deportes';
    businessSection.innerHTML = 'Negocios';
    let labelTitle = document.createElement('label');
    let inputTitle = document.createElement('input');
    inputTitle.type = 'text';
    inputTitle.id = 'newtitle';
    let labelDetail = document.createElement('label');
    let inputDetail = document.createElement('input');
    inputDetail.type = 'text';
    inputDetail.id = 'newdetail';
    let buttonAdd = document.createElement('button');
    buttonAdd.style.margin='1em 0';
    selectSection.appendChild(generalSection)
    selectSection.appendChild(sportSection)
    selectSection.appendChild(businessSection)
    labelTitle.innerHTML = 'Título';
    labelDetail.innerHTML = 'Descripción';
    buttonAdd.innerHTML = 'Crear noticia';
    form.appendChild(selectSection)
    form.appendChild(labelTitle);
    form.appendChild(inputTitle);
    form.appendChild(labelDetail);
    form.appendChild(inputDetail);
    form.appendChild(buttonAdd);
    buttonAdd.onclick = generateNewArticle;
}

// captura data formulario contacto 
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    console.log('nombre: ', document.selectForm.clientname.value);
    console.log('mensaje: ', document.selectForm.clientmsg.value);
});

