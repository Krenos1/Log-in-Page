//Constante de la page d'acceuil de l'utilisateur
const InputTache = document.getElementById("InputTache");
const BtnAjoutTache = document.getElementById("BtnAjoutTache");
const ListeDeTache = document.getElementById("ListeDeTache");
//Constante de la page de LOG IN
const inputUsername = document.getElementById("Username");
const inputPassword = document.getElementById("Password");

const sofiane = "";
const Scott = "";


var task = "ListeTache";
var i = 0;

BtnAjoutTache.addEventListener("click", AjoutTache);

//Fonction sur la page Sign up
function save(){
    const SaveUser = inputUsername.value;
    const SavePassword = inputPassword.value;
    //Assigne des constante pour sauvegarder le nom d'utilisateur et le mot de pase de l'utilisateur, Ensuite mettre dans local storage
    if (SaveUser!== "" || SavePassword !== ""){
    localStorage.setItem("Username1" + SaveUser, SaveUser);
    localStorage.setItem("Password1" + SaveUser, SavePassword);
    alert(sofiane + Scott);
    }
    else{
        alert("Veuillez entrer un nom d'utilisateur valide ou un mot de passe valide.1");
    }
}
function Login(){
    const Username = inputUsername.value;
    const Password = inputPassword.value;
    if (Username == localStorage.getItem("Username1" + Username) && Password == localStorage.getItem("Password1" + Username)){
        window.location.href = "Accueil.html";
    }
    else{
        alert("Veuillez entrer un nom d'utilisateur valide ou un mot de passe valide.2");
    }
}


function AjoutTache() {
    const TexteTache = InputTache.value.trim();
    if(TexteTache !== ""){
        const ListeItem = document.createElement("li");
        ListeItem.textContent = TexteTache;
        ListeDeTache.appendChild(ListeItem);
        Sauvegarde(TexteTache);
        InputTache.value = "";
        //Ajout de boutton de suppression à chaque élément de liuste
        const BtnModifier = document.createElement("button");
        const BtnSuprrimer = document.createElement("button");

        BtnModifier.textContent = "Modifier";
        ListeItem.appendChild(BtnModifier)
        BtnModifier.addEventListener("click",  );

        BtnSuprrimer.textContent = "Supprimer";
        ListeItem.appendChild(BtnSuprrimer);

        BtnSuprrimer.addEventListener("click", () => {
            ListeItem.remove();
        });

function Modification () {
    ListeItem.textcontent = 3131
}     


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
function affiche(){
   
    const User = localStorage.getItem(Username1.concat(Username));
    document.getElementById('Welcome').innerHTML = User;
    
    alert("User");
}