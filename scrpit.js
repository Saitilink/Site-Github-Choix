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

function sendEmail() {
    const data = {
        name: "Thomas",
        email: "menu.thomas1@gmail.com",
        message: "testedigdiygegid"
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function afficher() {
 console.log('idhuefo')   
 console.log(JSON.parse(localStorage.getItem('cliqueListe')));
 const data = {
    name: "Thomas",
    email: "menu.thomas1@gmail.com",
    message: "testedigdiygegid"
};

fetch('/send-email', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.text())
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error('Error:', error);
});
}
    