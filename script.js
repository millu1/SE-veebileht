
/* Allikas: https://codepen.io/aaroniker/pen/abzbRvo */
/* Nupu animatsioon */
document.querySelectorAll('.button').forEach(button => {
    button.innerHTML =
        '<div><span>' +
        button.textContent.trim() +
        '</span></div>';
});


/* Logo animatsioon Google Gemini abiga*/

const logo = document.querySelector('.logo');

const pildid = [
    'pildid/logo2.jpg', 
    'pildid/logo3.jpg', 
    'pildid/logo4.jpg', 
    'pildid/logo1.jpg'
];

let indeks = 0;
let taimer = null; 

function vahetaPilti() {
    indeks++;
    
    if (indeks >= pildid.length) {
        indeks = 0;
    }
    logo.src = pildid[indeks];
}

if (logo) {

 
    logo.addEventListener('mouseenter', () => {

        taimer = setInterval(vahetaPilti, 500);
    });

    logo.addEventListener('mouseleave', () => {

        clearInterval(taimer);

        indeks = 0;
        logo.src = pildid[0]; 
    });
}