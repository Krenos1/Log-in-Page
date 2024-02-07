
const InputTache = document.getElementById("InputTache");
const BtnAjoutTache = document.getElementById("BtnAjoutTache");
const ListeDeTache = document.getElementById("ListeDeTache");

var task = "ListeTache";
var i = 0;

BtnAjoutTache.addEventListener("click", AjoutTache);

function AjoutTache() {
    const TexteTache = InputTache.value.trim();
    if(TexteTache !== ""){
        const ListeItem = document.createElement("li");
        ListeItem.textContent = TexteTache;
        ListeDeTache.appendChild(ListeItem);
        Sauvegarde(TexteTache);
        InputTache.value = "";
        //Ajout de boutton de suppression à chaque élément de liuste
        const BtnSuprrimer = document.createElement("button");
        // BtnModifier.textContent = "Modifier";
        BtnSuprrimer.textContent = "Supprimer";
        
        ListeItem.appendChild(BtnSuprrimer);

        BtnSuprrimer.addEventListener("click", () => {
            ListeItem.remove();
        });

        


    } else {
        alert("Veuillez entrer une tâche valide");
    }
  
}
function Sauvegarde(TexteTache) {
    // const tache = InputTache.value.trim();
    localStorage.setItem(task.concat(i), TexteTache);
    i++;
}
function Restaurer() {
    let texte = localStorage.getItem("ListeTache");
    document.getElementById("ListeDeTache").innerHTML = texte;
}