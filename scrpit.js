let liste = JSON.parse(localStorage.getItem('cliqueListe')) || [];



document.querySelectorAll('.cliquable').forEach(div => {
    div.addEventListener('click',(e) => {
        const clique = e.currentTarget.id;
        if (clique) {
            liste.push(clique);  // Ajoute l'ID à la liste
            localStorage.setItem('cliqueListe', JSON.stringify(liste));  // Met à jour le LocalStorage
            console.log(JSON.parse(localStorage.getItem('cliqueListe')));
            
        }

    })
})

function afficher() {   
    console.log(JSON.parse(localStorage.getItem('cliqueListe')));
    
}
    
function reset(){
    liste =[];
    localStorage.setItem('cliqueListe', JSON.stringify(liste))

}

function ajoutHeure(){
    const valDeb = document.getElementById("begining").value;
    const valFin = document.getElementById("end").value;
    liste.push(valDeb);
    liste.push(valFin);  // Ajoute l'ID à la liste
    localStorage.setItem('cliqueListe', JSON.stringify(liste));
}

function pushVal(){
    const val = document.getElementById("rangeInput").value;
    liste.push(val)
    localStorage.setItem('cliqueListe', JSON.stringify(liste));
}