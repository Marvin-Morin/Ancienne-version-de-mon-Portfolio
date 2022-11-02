/* Interdire le CTRL U */

window.onkeydown = function (event) {
    var e = event || window.event;
    if (e.keyCode === 85 && e.ctrlKey === true) {
        e.stopPropagation();
        e.preventDefault();
        e.returnValue = false;
        return false;
    }
}

/* Interdire le clique droit */
document.oncontextmenu = function () {
    return false;
};



/* Je prend mon image de moi */
const imageMarvin = document.querySelector('#imagemarvin');


/* Après 3/10 de secondes, j'ajoute la class qui permet l'animation */

setTimeout(() => {
    imageMarvin.classList.add('visible');
}, 300);


/* Je prend le bouton passer */
const passerAnnimation = document.querySelector('#passer');

/* Je prend mon titre Annimé H1 */
const H1Accueil = document.querySelector('#H1Accueil');

/* Au moment du clique sur mon bouton passer */
passerAnnimation.addEventListener('click', () => {

    /* Je met mon titre animé en display none */
    H1Accueil.style.display = "none";

    /* Ainsi que le boutton en display none */
    passerAnnimation.style.display = "none";

    /* Et je mets mon container contenant tous mes boutons en display flex pour les rendre visible dès 
    le bouton passer cliqué (sans attendre l'autre fonction qui attend la fin de l'animation avant de mettre le container en flex */
    setTimeout(() => {

        container.style.display = "flex";


    }, 0);

});

/* Texte animé page accueil */

/* Je prends mon H1 du menu accueil */
const txtAnim = document.querySelector('#H1Accueil');

/* Je crée un nouvel opérateur qui me permet de créer l'objet txtAnim */
new Typewriter(txtAnim, {

    /* J'accélère la partie de suppression */
    deleteSpeed: 20

})

    /* Je reduit la vitesse au moment du rajout de chaque caractères */
    .changeDelay(40)

    /* Mon texte qui va s'écrire */
    .typeString(`Bienvenue sur le portfolio de Marvin`)

    /* J'impose une pause de 9/10s après avoir écrit ma première phrase pour laisser le temps à l'utilisateur de lire */
    .pauseFor(900)

    /* Je supprime les 36 derniers caractères, donc ma première phrase */
    .deleteChars(36)

    .typeString(`Étudiant En développement web Front-end`)
    .pauseFor(900)
    .deleteChars(39)
    .typeString(`Bonne visite :)`)

    /* Pour commencer l'animation */
    .start();





/*  PARTIE BOUTONS  */




/* Sélection des boutons ouvrir, fermer et tous les boutons  */

const openRad = document.querySelector("#open");
const closeRad = document.querySelector("#close");
const radial = document.querySelector(".radial");



/* Quand le bouton ouvrir est cliqué, on ouvre  la partie radiale qui contient tous mes boutons  */
/* On mets le bouton ouvrir en display none et le bouton close en block  */
/*  on supprime l'annimation de fermeture (close)  */

openRad.addEventListener('click', () => {
    radial.classList.add('open');
    openRad.style.display = "none";
    closeRad.style.display = "block";
    radial.classList.remove('close');
})



/*  on ajoute l'animation de fermeture à notre div radial qui contient tous nos boutons (close)  */
/*  on supprime l'animation d'ouverture (open)  */
/* On mets le bouton fermer en display none et le bouton ouvrir en block  */

closeRad.addEventListener('click', () => {
    radial.classList.add('close');
    radial.classList.remove('open');
    openRad.style.display = "block";
    closeRad.style.display = "none";

    /* Pour que la div radial qui contient tous nos boutons ne r'apparais pas automatiquement  */

    setTimeout(() => {

        radial.classList.remove('close');

    }, 700);

});



/* On prend mon container qui contient ma div radial et mes deux boutons open & close */

const container = document.querySelector('.container');

/* Et on leur dit d'apparaitre à la fin de mon animation de texte qui dure 16.5s */

setTimeout(() => {

    container.style.display = "flex";

    /* j'ai pris plus haut mon bouton passer, et je lui dit ici de disparaitre à la fin de mon animation  */

    passerAnnimation.style.display = "none";

    /* ici, mon texte H1 va disparaitre à la fin de l'animation pour laisser place à la div container (mes boutons) */

    H1Accueil.style.display = "none";


}, 11000);



/* Partie pour afficher les pages au moment du clique sur les liens ".btn" */



/* Je selectionne ma page 1 (Accueil) */

const page1 = document.querySelector('.page1')

/* Je sélectionne tous mes liens (a) boutons (open & close non concernés) */
const btn = Array.from(document.querySelectorAll('a.btn'));

/* Au moment du clique sur tous mes liens qui on la class btn, je mets la class out qui permet l'animation de fermeture sur ma page1 (Accueil) */
function callback(element) {
    element.addEventListener('click', () => {
        page1.classList.add('out');
    })
};



/* L'animation de ma page d'accueil à chaque clique de mes liens  */



/* Pour la longueur de mon tableau element qui comprend tous mes boutons, à chaque btn cliqué, 
il exécute la fonction callback qui va permettre de rajouter la class qui va permettre l'animation 
de fermeture  */
for (let i = 0; i < btn.length; i++) {
    callback(btn[i]);
}


/*  MES BOUTONS  */


/*  SECTION RETOUR  */

const mesTimeout = [];

mesTimeout.push(setTimeout(() => {}));

const bouttonRetour = Array.from(document.querySelectorAll('.btnretour'));

function btnRetour(element) {
    
    element.addEventListener('click', () => {


        /* Pour que la page1 Accueil réapparaisse, j'enlève la classe qui permet l'animation 
        de fermeture que j'ai mis dans la fonction callback pour tous les clics de mes liens */
        page1.classList.remove('out');

        mesTimeout.forEach(clearTimeout);

        /* Section compétences */
        // Competences.style.display = "none";



        /* Partie CV */
        cv.classList.remove('open');
        cv.classList.add('close');



        /* Partie Moi */
        moi.classList.remove('open');
        moi.classList.add('close');


        /* Partie blog */
        blog.classList.remove('open');
        blog.classList.add('close');

        carte.style.display = "none";
        deuxiemecarte.style.display = "none";
        troisiemecarte.style.display = "none";
        quatriemecarte.style.display = "none";

        



        /* ANIMATION DELAY, je mets mes pages en display none sinon elles réapparaissent */
        setTimeout(() => {

            cv.style.display = "none";
            moi.style.display = "none";
            blog.style.display = "none";

        }, 600);

    })
    
};

for (let i = 0; i < bouttonRetour.length; i++) {
    btnRetour(bouttonRetour[i]);
};




/* Mon lien  jeu */

/* Je selectionne mon bouton jeu */
const btnE = document.querySelector('.e');

/* Au moment du clique sur mon bouton jeu, je créer deux alertes */
btnE.addEventListener('click', () => {

    alert(`Je n'ai pas encore développé cet endroit. 
    Lorsque j'aurai le niveau, je développerai cette page !`)

    alert('je vais créer des jeux afin de montrer mes capacités en CSS & Javascript')

    /* Pour rester sur la page d'accueil */
    page1.classList.remove('out');

});



/* Mon lien github / linkedin & mes compétences */
const linkedin = document.querySelector('.se');
const github = document.querySelector('.nw');
const mescompetencesbtn = document.querySelector('.w');
const btnfront = document.querySelector('.n');

linkedin.addEventListener('click', () => {
    page1.classList.remove('out');
});

github.addEventListener('click', () => {
    page1.classList.remove('out');
});

mescompetencesbtn.addEventListener('click', () => {
    alert('Je vais créer une page qui va réunir tout ce que je sais faire ! ')
    page1.classList.remove('out');
});

btnfront.addEventListener('click', () => {
    page1.classList.remove('out');
});



/* Mon lien  CV */

/* Lorsque je clique sur le lien mon cv */

/* Je sélectionne mon bouton cv qui correspond au lien nord-est */
const moncv = document.querySelector('.ne');

/* Je selectionne ma section cv */
const cv = document.querySelector('#moncv');


/* Au moment du clique sur mon lien cv, */
moncv.addEventListener('click', () => {

    cv.style.display = "flex";

    cv.classList.remove('close');
    cv.classList.add('open');

});



/* Section Moi */



/* Mon lien  Moi */
const moi = document.querySelector('#moi');
const monmoi = document.querySelector('.s');
/* Ma première carte */
const carte = document.querySelector('#premierecarte');
const pcarte = document.querySelector('#pcarte')
/* Ma deuxieme carte */
const deuxiemecarte = document.querySelector('#deuxiemecarte');
const pcarte2 = document.querySelector('#pcarte2');
/* Ma troisieme carte */
const troisiemecarte = document.querySelector('#troisiemecarte');
const pcarte3 = document.querySelector('#pcarte3');
/* Ma quatrieme carte */
const quatriemecarte = document.querySelector('#quatriemecarte');
const pcarte4 = document.querySelector('#pcarte4');

/* Au clique sur mon bouton "Moi", */
monmoi.addEventListener('click', () => {
    /* Je mets ma section en display */
    moi.style.display = "flex";
    /* Je supprime la class close qui permet l'animation de fin */
    moi.classList.remove('close');
    /* J'ajoute la class open qui permet l'animation du début */
    moi.classList.add('open');
    /* Je mets ma première carte de display none à flex */
    carte.style.display = "flex";

    cv.classList.add('open');
    cv.classList.remove('close');



    /* Je créer un nouvel opérateur qui me permet de créer l'objet txtAnim qui sera la première phase de moi */
    new Typewriter(pcarte, {

        /* J'accélère la partie de suppression */
        deleteSpeed: 5

    })
        .changeDelay(80)
        .pauseFor(1500)
        .typeString(`Bonjour, je m'appelle Marvin,`)
        .pauseFor(900)
        .deleteChars(30)
        .typeString(`j'ai 24 ans,`)
        .pauseFor(900)
        .deleteChars(12)
        .typeString(`je suis né à Saint-Malo dans le département des meilleurs !`)
        .start()




    /* J'attends la fin de mon animation texte avant de mettre l'animation fondue */
    setTimeout( function moi1 () {
        carte.style.animationName = "Animation1CarteOut";


    }, 21000);
    


    /* A partir de 17 secondes après avoir cliqué sur mon bouton "Moi", */
    setTimeout( function moi2 () {
        carte.style.display = "none";
        deuxiemecarte.style.display = "flex";


        /* Je créer un nouvel opérateur qui me permet de créer l'objet txtAnim */
        new Typewriter(pcarte2, {

            /* J'accelère la partie de suppréssion */
            deleteSpeed: 5

        })
            .changeDelay(80)
            .pauseFor(2000)
            .typeString(`Je suis passionné par le développement web depuis 2017 !`)
            .pauseFor(900)
            .deleteChars(56)
            .typeString(`j'adore coder, c'est devenu une<span style= "color: yellowgreen;"> passion !</span>`)
            .start()



    }, 20000);


    setTimeout( function moi3 () {
        deuxiemecarte.style.animationName = "Animation2CarteOut";

        clearTimeout();

    }, 40000);

    setTimeout( function moi4 () {
        deuxiemecarte.style.display = "none";
        troisiemecarte.style.display = "flex";



        /* Je créer un nouvel opérateur qui me permets de créer l'objet txtAnim */
        new Typewriter(pcarte3, {
            deleteSpeed: 5
        })
            .changeDelay(80)
            .pauseFor(2000)
            .typeString(`Après mes deux années d'apprentissage dans le domaine : peintre en bâtiment,`)
            .pauseFor(900)
            .deleteChars(76)
            .typeString(`je me suis beaucoup intéressé à l'informatique et au métier de développeur web !`)
            .start()



    }, 42000);

    setTimeout( function moi5 () {

        troisiemecarte.style.animationName = "Animation3CarteOut";

        
    }, 66000);

    setTimeout( function moi6 () {
        troisiemecarte.style.display = "none";
        quatriemecarte.style.display = "flex";


    }, 68000);

    setTimeout( function moi7 () {
                new Typewriter(pcarte4, {
            deleteSpeed: 5
        })
            .changeDelay(80)
            .pauseFor(2000)
            .typeString(`N'hésitez pas à me <span style="text-decoration:underline"> <a href="mailto:marvin.morin@institutsolacroup.fr">contacter</a></span> :)`)
            .start()


    }, 68000);

});


/* Partie Blog */

const blog = document.querySelector('#blog');
const btnblog = document.querySelector('.sw');

btnblog.addEventListener('click', () => {
    blog.style.display = "flex";
    blog.classList.add('open');
    blog.classList.remove('close');
})
