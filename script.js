document.addEventListener("DOMContentLoaded", function () {
  let avatarChoice = "";
  let listeApprenant = [];

  const inputPrenomApprenant = document.querySelector('#prenomEleve');
  const avatarButton = document.querySelector("#avatarButton");
  const avatars = document.querySelectorAll(".avatarOption");
  const submitApprenantButton = document.querySelector(
    "#submitApprenantButton"
  );

  avatarButton.addEventListener("click", handleShowAvatar);
  submitApprenantButton.addEventListener("click", handleCreateApprenant);

  avatars.forEach((avatar) => {
    avatar.addEventListener("click", handleAvatarChoice);
  });

  function handleShowAvatar() {
    const menuDeroulant = document.querySelector("#menuDeroulant");

    menuDeroulant.classList.remove("hidden");
    menuDeroulant.classList.add("flex");
  }

  function handleAvatarChoice(event) {
    const menuDeroulant = document.querySelector("#menuDeroulant");

    menuDeroulant.classList.add("hidden");
    menuDeroulant.classList.remove("flex");

    avatarChoice = event.target.src;

    // Remplace le bouton "Choisir un avatar" par l'avatar choisit
    avatarButton.innerHTML = `<img src="${avatarChoice}" alt="choix-avatar">`;
  }

  function handleCreateApprenant() {
    // Si l'utilisateur n'a pas choisit d'avatar
    if (avatarChoice === "") {
      avatarButton.classList.remove("bg-neutral-off-white");
      avatarButton.classList.add("bg-red-600");
    }
    
    // si l'utilisateur n'a pas renseigné son prénom
    if (inputPrenomApprenant.value === "") {
      prenomEleve.classList.remove("bg-neutral-off-white");
      prenomEleve.classList.add("bg-red-600");
    }

    // Si l'utilisateur a fait les choix necessaire à la création de sa ligne apprenant
    if (avatarChoice !== "" && inputPrenomApprenant.value !== "") {

        listeApprenant.push({
            nomApprenant: inputPrenomApprenant.value,
            avatarApprenant: avatarChoice
        });
        

        const gridEleve = document.querySelector('#gridsEleve');
        
        // création d'une div virtuelle en js
        let newDiv = document.createElement('div');
        newDiv.classList.add('apprenant');

        // création d'une image virtuelle en js pour l'avatar de l'apprenant
        let newImg = document.createElement('img');
        newImg.src = avatarChoice;
        newImg.alt = inputPrenomApprenant.value;
        newImg.classList.add('h-[64px]', 'w-[64px]');

        // création d'un pararaphe virtuel en js pour le prénom de l'apprenant
        let newName = document.createElement('p');
        newName.innerHTML = inputPrenomApprenant.value;
        // Ajouter le CSS pour le prénom ici

        // On ajoute à la div virtuelle, l'avatar et le prénom de l'apprenant
        newDiv.appendChild(newImg);
        newDiv.appendChild(newName);

        // On ajoute à la grille la div virtuelle
        gridEleve.appendChild(newDiv);

        //Reinitialisation de l'input prénom et du choix d'avatar
        inputPrenomApprenant.value = "";
        avatarChoice = "";
        avatarButton.innerHTML = `Choisir un avatar`;
        
    }
  }


});


const students = ['elo', 'naim', 'jerem', 'sirene', 'clem','ali', 'naim D.', 'simon', 'ahmed','karl','mohand', 'nadir', 'marion', 'mathias', 'hamza'];

const classroom = document.querySelector('#classroom');
const randomDispach = document.querySelector('#randomDispach');

randomDispach.addEventListener('click', handleStudentDisplay);

function classroomDisplay() { // création des cartes pour afficher les apprenants
    classroom.innerHTML = ''; // vide tout le contenu html de cette classe

    for (let i = 0; i < students.length; i++) { // crée le nombre de cartes voulues
        const cardStudent = document.createElement('div'); // crée une nouvelle div = card
        cardStudent.classList.add('w-24', 'h-24', 'bg-gray-200', 'flex', 'items-center', 'justify-center', 'border', 'border-gray-300', 'rounded-lg', 'text-sm', 'font-semibold');
        cardStudent.dataset.index = i; // ajoute un index à chaque carte
        classroom.appendChild(cardStudent); // ajoute la div dans element classroom
    }
}


function handleStudentDisplay() {
    const studentRandom = []; // tableau pour stocker les apprenants

    for (let i = 0; i < students.length; i += 1) {
        studentRandom.push(students[i]); // stock les apprenants collectés dans le tableau de départ
    }

    for (let i = studentRandom.length - 1; i > 0; i -= 1) { // mélange le tableau de façon aléatoire
        const randomNumber = Math.floor(Math.random() * (i + 1));
        const temp = studentRandom[i]; // shuffle les éléments grâce a l'algo de Fisher-Yates
        studentRandom[i] = studentRandom[randomNumber];
        studentRandom[randomNumber] = temp;
    }

    const cardStudent = document.querySelectorAll('#classroom .w-24');
    cardStudent.forEach((cardStudent, index) => {
        cardStudent.textContent = studentRandom[index] || '';
    });

};

classroomDisplay();
