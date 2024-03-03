//Constante de la page d'acceuil de l'utilisateur
const InputTache = document.getElementById("InputTache");
const BtnAjoutTache = document.getElementById("BtnAjoutTache");
const ListeDeTache = document.getElementById("ListeDeTache");
//Constante de la page de LOG IN
const inputUsername = document.getElementById("Username");
const inputPassword = document.getElementById("Password");

// fonctions qui permet l'ouverture d'une fenetre d'isncription 
function showSignupForm() {
    document.getElementById("signup").style.display = "block";
}
// referme la fenetre dinscription
function closeSignupForm() {
    document.getElementById("signup").style.display = "none";
}

//Permet la sauvegarde du username et du password
function save() {
    const newUsername = document.getElementById("NewUsername").value;
    const newPassword = document.getElementById("NewPassword").value;

    if (newUsername && newPassword) {
        // Récupérer les utilisateurs existants du localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Vérifier si le nouvel utilisateur existe déjà
        const existingUser = users.find(user => user.username === newUsername);
        if (existingUser) {
            alert("Cette Utilisateur existe déja veuillez recommencer");
            return;
        }

        // Ajouter le nouvel utilisateur à la liste des utilisateurs
        users.push({ username: newUsername, password: newPassword });

        // Mettre à jour le localStorage avec la nouvelle liste d'utilisateurs
        localStorage.setItem("users", JSON.stringify(users));

        alert("Félicitation! Bienvenue chez Wendy's");
    } else {
        alert("Veuillez entrer votre Nom d'utilisateur et votre mot de passe!");
    }
}

// Permet à l'utilisateur de se connecter
function Login() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    // Récupérer les utilisateurs existants du localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Trouver l'utilisateur correspondant
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "Accueil.html";
    } else {
        alert("Mot de passe ou nom d'utilisateur invalide, Veuillez recommencez");
    }
}


var task = "ListeTache";
var i = 0;

BtnAjoutTache.addEventListener("click", AjoutTache);

function AjoutTache() {
    const TexteTache = InputTache.value.trim();
    if (TexteTache !== "") {
        const ListeItem = document.createElement("li");
        ListeItem.textContent = TexteTache;
        ListeDeTache.appendChild(ListeItem);
        Sauvegarde(TexteTache);
        InputTache.value = "";

        // Ajout de bouton de suppression à chaque élément de liste
        const BtnModifier = document.createElement("button");
        const BtnSuprrimer = document.createElement("button");
        const BtnCompleter = document.createElement("button");

        BtnModifier.textContent = "Modifier";
        ListeItem.appendChild(BtnModifier);
        BtnModifier.addEventListener("click", Modification);

        BtnSuprrimer.textContent = "Supprimer";
        ListeItem.appendChild(BtnSuprrimer);
        BtnSuprrimer.addEventListener("click", () => {
            ListeItem.remove();
        });

        BtnCompleter.textContent = "Tâche Complèter";
        ListeItem.appendChild(BtnCompleter);
        BtnCompleter.addEventListener("click", MarquerComplet)

    } else {
        alert("Veuillez entrer une tâche valide");
    }
}

function MarquerComplet() {
    // Inversion de la classe 'completed' pour indiquer si la tâche est complétée ou non
    this.parentNode.classList.toggle("completed");
}

function Modification() {
    const nouveauTexte = prompt("Entrez la nouvelle valeur de la tâche :");
    if (nouveauTexte !== null && nouveauTexte.trim() !== "") {
        // Mettre à jour le texte de l'élément de liste
        this.parentNode.textContent = nouveauTexte;

        // Mettre à jour également dans le stockage local
        const index = Array.from(ListeDeTache.children).indexOf(this.parentNode);
        const key = task + index;
        localStorage.setItem(key, nouveauTexte);
    } else {
        alert("Veuillez entrer une valeur valide pour la tâche.");
    }
}

function Sauvegarde(TexteTache) {
    localStorage.setItem(task.concat(i), TexteTache);
    i++;
}

function Restaurer() {
    // Supprimer les éléments actuels de la liste
    ListeDeTache.innerHTML = "";

    // Parcourir le localStorage pour récupérer les tâches sauvegardées
    for (let j = 0; j < localStorage.length; j++) {
        const key = localStorage.key(j);
        if (key.startsWith(task)) {
            const tache = localStorage.getItem(key);
            const ListeItem = document.createElement("li");
            ListeItem.textContent = tache;
            ListeDeTache.appendChild(ListeItem);

            // Ajouter des boutons de modification et de suppression
            const BtnModifier = document.createElement("button");
            const BtnSuprrimer = document.createElement("button");

            BtnModifier.textContent = "Modifier";
            ListeItem.appendChild(BtnModifier);
            BtnModifier.addEventListener("click", Modification);

            BtnSuprrimer.textContent = "Supprimer";
            ListeItem.appendChild(BtnSuprrimer);
            BtnSuprrimer.addEventListener("click", () => {
                ListeItem.remove();
            });
        }
    }
}

