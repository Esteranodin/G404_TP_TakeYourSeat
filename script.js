document.addEventListener("DOMContentLoaded", function () {
  // Ici on commence a formuler de cette facon, avec DOMContentloaded pour s'assurer que tout le DOM est chargé avant de s'occuper du JS

  let avatarChoice = "";
  // Ca me permet de déclarer une variable vide qui sera utilisée pour stocker l'avatar choisi par l'utilisateur.

  let listeApprenant = [];
  // Je déclare un tableau vide qui me servira à stocker les informations des apprenants (le prénom de l'élève et  son avatar).

  // let cardStudent ='';

  const inputPrenomApprenant = document.querySelector("#prenomEleve");
  const avatarButton = document.querySelector("#avatarButton");
  const avatars = document.querySelectorAll(".avatarOption");
  const submitApprenantButton = document.querySelector("#submitApprenantButton" );
  const students = [];
  const randomDispach = document.querySelector("#randomDispach");
  const gridEleve = document.querySelector("#gridEleve");

  avatarButton.addEventListener("click", handleShowAvatar);
  // Cette ligne ajoute un événement au bouton "Choisir un avatar". Lorsqu'on clique sur ce bouton, la fonction handleShowAvatar sera exécutée.

  submitApprenantButton.addEventListener("click", handleCreateApprenant);
  // Cette ligne ajoute un événement au bouton "Soumettre". Lorsque ce bouton est cliqué, la fonction handleCreateApprenant sera exécutée.

  randomDispach.addEventListener("click", handleStudentDisplay);

  avatars.forEach((avatar) => {
    avatar.addEventListener("click", handleAvatarChoice);
    // Cette ligne ajoute un événement de clic sur chaque avatar. Quand un avatar est cliqué, la fonction handleAvatarChoice sera exécutée.
  });

  function handleShowAvatar() {
    // Cette fonction est appelée lorsque l'utilisateur clique sur le bouton pour choisir un avatar. Elle affiche le menu déroulant avec les avatars disponibles.

    const menuDeroulant = document.querySelector("#menuDeroulant");

    menuDeroulant.classList.remove("hidden");
    //   Cette ligne enlève la classe hidden du menu déroulant pour le rendre visible
    menuDeroulant.classList.add("flex");
    //   Cette ligne ajoute la classe flex au menu déroulant, ce qui permet de le mettre en forme et de l'afficher comme un conteneur flexible.
  }

  function handleAvatarChoice(event) {
    // On apelle cette fonction lorsque l'utilisateur clique sur un avatar. Elle cache le menu déroulant et met à jour le bouton avec l'avatar choisi.

    const menuDeroulant = document.querySelector("#menuDeroulant");

    menuDeroulant.classList.add("hidden");
    //   On cache le menu déroulant après qu'un avatar a été sélectionné.
    menuDeroulant.classList.remove("flex");
    // On enlève la classe flex pour masquer le menu déroulant.

    avatarChoice = event.target.src;
    //   On récupère l'URL de l'avatar sélectionné et l'affecte à la variable avatarChoice.

    // Remplace le bouton "Choisir un avatar" par l'avatar choisit
    avatarButton.innerHTML = `<img src="${avatarChoice}" alt="choix-avatar">`;
  }

  function handleCreateApprenant() {
    // Cette fonction est exécutée lorsque l'utilisateur clique sur le bouton "Soumettre". Elle valide les informations (prénom et avatar), ajoute l'apprenant à la liste, et met à jour l'affichage des apprenants
    // Si l'utilisateur n'a pas choisit d'avatar
   

    if (avatarChoice === "") {
      avatarButton.classList.remove("bg-neutral-off-white");
      avatarButton.classList.add("bg-red-600");
      //   Si l'utilisateur n'a pas choisi d'avatar ou n'a pas entré de prénom, ces conditions changent la couleur du bouton pour indiquer l'erreur.
    }

    // si l'utilisateur n'a pas renseigné son prénom
    if (inputPrenomApprenant.value === "") {
      prenomEleve.classList.remove("bg-neutral-off-white");
      prenomEleve.classList.add("bg-red-600");

      // si l'utilisateur n'a pas renseigné son prénom on fait apparaitre un fond en rouge pour montrer que quelques chose ne va pas
    }

    // Si l'utilisateur a fait les choix necessaire à la création de sa ligne apprenant
    if (avatarChoice !== "" && inputPrenomApprenant.value !== "") {
      listeApprenant.push({
        nomApprenant: inputPrenomApprenant.value,
        avatarApprenant: avatarChoice,
      });

      // création d'une div virtuelle en js
      let cardStudent = document.createElement("div");
      cardStudent.classList.add("apprenant");

      // création d'une image virtuelle en js pour l'avatar de l'apprenant
      let newImg = document.createElement("img");
      newImg.src = avatarChoice;
      newImg.alt = inputPrenomApprenant.value;
      newImg.classList.add("h-[64px]", "w-[64px]");

      // création d'un pararaphe virtuel en js pour le prénom de l'apprenant
      let newName = document.createElement("p");
      newName.innerHTML = inputPrenomApprenant.value;
      // Ajouter le CSS pour le prénom ici

      // On ajoute à la div virtuelle, l'avatar et le prénom de l'apprenant
      cardStudent.appendChild(newImg);
      cardStudent.appendChild(newName);

      // On ajoute à la grille la div virtuelle
      gridEleve.appendChild(cardStudent);

      //Reinitialisation de l'input prénom et du choix d'avatar
      inputPrenomApprenant.value = "";
      avatarChoice = "";
      avatarButton.innerHTML = `Choisir un avatar`;

      students.push(cardStudent);
      // Les div virtuelles sont push dans le tableau students
    }
  }

  function handleStudentDisplay() {
    const studentRandom = [...students]; // copie du tableau pour stocker les apprenants
//     permet de créer une copie superficielle de ce tableau.
// Cela permet d'éviter de modifier le tableau d'origine students pendant le  mélange. Ainsi, studentRandom contient une copie du tableau des étudiants.

    for (let i = studentRandom.length - 1; i > 0; i -= 1) {
      // mélange le tableau de façon aléatoire
      const randomNumber = Math.floor(Math.random() * (i + 1));
      const temp = studentRandom[i]; // shuffle les éléments grâce a l'algo de Fisher-Yates
      studentRandom[i] = studentRandom[randomNumber];
      studentRandom[randomNumber] = temp;
    }

    const virtualDivs = document.querySelectorAll(".apprenant");

    virtualDivs.forEach((virtualDiv, index) => {
      gridEleve.appendChild(studentRandom[index]);
      // ajoute chaque élément de studentRandom à gridEleve dans l'ordre mélangé.
    });
  }

  // classroomDisplay();
});
