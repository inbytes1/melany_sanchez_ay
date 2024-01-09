const date = new Date("Feb 10, 2024 19:00:00").getTime();

let setCountdown = setInterval(function() {
    let currentDate = new Date().getTime();
    let timeLeft = date - currentDate;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    displayCountdown(days, hours, minutes, seconds);
}, 1000);

function displayCountdown(days, hours, minutes, seconds) {
    let diaz = days + ((days === 1) ? " Dia  " : " Dias ");
    let horas = hours + ((hours === 1) ? " Hora " : " Horas ");
    let minutos = minutes + ((minutes === 1) ? " Minuto " : " Minutos ");
    let segundos = seconds + " Segundos ";

    document.getElementById('days').innerHTML = diaz;
    document.getElementById('hours').innerHTML = horas;
    document.getElementById('minutes').innerHTML = minutos;
    document.getElementById('seconds').innerHTML = segundos;

}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

gsap.to('.fieston', {
    scrollTrigger: {
        trigger: '.fieston',
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
    },
    x: '130vw',
    rotate: '-10deg',
})

gsap.to('.foto-2', {
    scrollTrigger: {
        trigger: '.intro',
        start: 'center center',
        end: '+=10vh center',
        scrub: 2,
    },
    x: '-47vw',
    rotate: '-367deg',
})

gsap.to('.txt-ubi', {
    scrollTrigger: {
        trigger: '.details',
        start: 'top 60%',
        end: '+=20vh',
    },
    text: 'Tanto la celebracion como la ceremonia religiosa se llevaran a cabo en el local de la familia que se encuentra en el pueblo de Dzonot Carretero, Municipio de Tizimin, Yucatán.',
    duration: 3,
    ease: 'none',
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".caja-details-donde",
        start: "top center",
        end: "+=30px center",
        scrub: 2,
    }
})

tl.to('.txt-donde', {
    duration: 1,
    text: "En el local familiar ubicado en el pueblo de Dzonot Carretero.",
    ease: "none",
    padding: "0 20px",
    width: "55vw",
    color: "#B19470",
})

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".caja-details-cuando",
        start: "top center",
        end: "+=30px center",
        scrub: 2,
    }
})

tl2.to('.txt-cuando', {
    duration: 1,
    text: "El 10 de Febrero del 2024 en punto de las <span class='text-white'>19:00 PM</span>",
    ease: "none",
    padding: "0 20px",
    width: "55vw",
    color: "#B19470",
})

gsap.to(".mis-xv-anos", {
    scrollTrigger: {
        trigger: '.intro',
        start: 'top 60%',
        end: '+=20vh',
    },
    duration: 2,
    text: 'Mis XV Años',
    ease: 'none'
});