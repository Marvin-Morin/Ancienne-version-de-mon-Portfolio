
const imageMarvin = document.querySelector('#imagemarvin');

/* image Marvin apparition */

setTimeout(() => {
    imageMarvin.classList.add('visible');
}, 300);


const passerAnnimation = document.querySelector('#passer');
const H1Accueil = document.querySelector('#H1Accueil');

passerAnnimation.addEventListener('click', () => {
    H1Accueil.style.display="none";
    passerAnnimation.style.display="none";


    setTimeout(() => {

        container.style.display="flex";
            
        
    }, 0);
})





// const ratio = 0;
// const options = {
    //   root: null,
    //   rootMargin: '0px',
    //   threshold : ratio
    // };
    
    // const handleIntersect = function (entries, observer) {
        //     entries.forEach(function (entries, observer) {
            //         entries.forEach(function (entry) {
                //             if (entry.IntersectionRatio > ratio) {
                    //                 entry.target.classList.add('reveal-visible')
                    //                 observer.unobserve(entry.target)
                    //             }
                    //         })
                    //     })
                    // }
                    
                    // const observer = new IntersectionObserver(handleIntersect, options);
                    // observer.observe(document.querySelector('.reveal'));
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
const txtAnim = document.querySelector('#H1Accueil');

new Typewriter(txtAnim, {
    deleteSpeed: 20
}).changeDelay(40).typeString(`Bienvenue sur le portfolio de Marvin`)
.pauseFor(900)
.deleteChars(36)
.typeString(`Étudient En <strong>développement web Front-end</strong>`)
.pauseFor(900)
.deleteChars(13)
.typeString(`<span style="color: blueviolet;"> HTML</span> !`)
.pauseFor(500)
.deleteChars(6)
.typeString(`<span style= "color: #db2525;"> CSS</span> !`)
.pauseFor(500)
.deleteChars(5)
.typeString(`<span style= "color: deeppink;"> JavaScript</span> !`)
.pauseFor(500)
.deleteChars(12)
.typeString(`<span style= "color: #cfdb25;"> Bootstrap</span> !`)
.pauseFor(500)
.deleteChars(50)
.typeString(`Bonne visite :)`)
.start();

/*  PARTIE BOUTONS  */

const openRad = document.querySelector("#open");
const closeRad = document.querySelector("#close");
const radial = document.querySelector(".radial");



openRad.addEventListener('click', () => {
    radial.classList.add('open');
    openRad.style.display = "none";
    closeRad.style.display = "block";
    radial.classList.remove('close');
})


closeRad.addEventListener('click', () => {
    radial.classList.add('close');
    radial.classList.remove('open');
    openRad.style.display = "block";
    closeRad.style.display = "none";

    setTimeout(() => {

        radial.classList.remove('close');
        
    }, 700);

})

const container = document.querySelector('.container');

setTimeout(() => {

    container.style.display="flex";
    passerAnnimation.style.display="none";
    H1Accueil.style.display = "none";
        
    
}, 16500);


