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
    
    let text = "";
    for (let k = 0; k < liste.length; k++) {
        text += liste[k] + " ";
    }
    const blob = new Blob([text], { type: 'text/plain' });

    // Créer une URL pour ce Blob
    const url = URL.createObjectURL(blob);

    // Créer un lien temporaire pour télécharger le fichier
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Resultat.chr';  // Nom du fichier à télécharger
    document.body.appendChild(a);
    a.click();  // Simuler le clic pour télécharger
    document.body.removeChild(a);  // Supprimer le lien temporaire

    // Libérer la mémoire allouée pour l'URL Blob
    URL.revokeObjectURL(url);
    liste =[];
    localStorage.setItem('cliqueListe', JSON.stringify(liste))
    
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