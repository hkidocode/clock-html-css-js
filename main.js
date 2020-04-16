// selectionner les éléments DOM
const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

updateClock();
function updateClock() {
    //heure courante dans le fuseau horaire locale
    let date = new Date();
    //renvoie les secondes (0-59) pour la date spécifiée selon l'heure locale.
    let sec = date.getSeconds() / 60;
    //renvoie les minutes (0-59) pour la date spécifiée selon l'heure locale.
    let min = date.getMinutes() / 60;
    //renvoie l'heure (0-23) pour la date spécifiée selon l'heure locale.
    let hour = date.getHours() / 12;
    console.log(hour);

    secDiv.style.transform = 'rotate(' + (sec * 360) + 'deg)';
    minDiv.style.transform = 'rotate(' + (min * 360) + 'deg)';
    hourDiv.style.transform = 'rotate(' + (hour * 360) + 'deg)';
}

//appelle à plusieurs reprises une fonction avec un délai fixe entre chaque appel
setInterval(updateClock, 1000);
