let liste = JSON.parse(localStorage.getItem('cliqueListe')) || [];



document.querySelectorAll('.cliquable').forEach(div => {
    div.addEventListener('click',(e) => {
        const clique = e.currentTarget.id
        if (clique) {
            liste.push(clique);  // Ajoute l'ID à la liste
            localStorage.setItem('cliqueListe', JSON.stringify(liste));  // Met à jour le LocalStorage
            console.log(JSON.parse(localStorage.getItem('cliqueListe')));
            
        }

    })
})

emailjs.init("votre_clé_publique");

const serviceID = 'service_1z3jtct'
const templateID = 'template_mq5fx6a'




function afficher() {
    console.log('idhuefo')   
    console.log(JSON.parse(localStorage.getItem('cliqueListe')));
    emailjs.send(serviceID, templateID, {
        user_name:"Thomas",
        message: liste
})
.then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
}, function(error) {
    console.log('FAILED...', error);
});
    liste = []
}
    