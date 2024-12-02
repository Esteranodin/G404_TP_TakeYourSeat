document.addEventListener("DOMContentLoaded", function () {
  let avatarChoice = "";
  let listeApprenant = [];
  // let cardStudent ='';

  const inputPrenomApprenant = document.querySelector('#prenomEleve');
  const avatarButton = document.querySelector("#avatarButton");
  const avatars = document.querySelectorAll(".avatarOption");
  const submitApprenantButton = document.querySelector("#submitApprenantButton");
  const students = [];
  const randomDispach = document.querySelector('#randomDispach');
  const gridEleve = document.querySelector('#gridEleve');
  // const classroom = document.querySelector('#classroom');


  avatarButton.addEventListener("click", handleShowAvatar);
  submitApprenantButton.addEventListener("click", handleCreateApprenant);
  randomDispach.addEventListener('click', handleStudentDisplay);

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
        
        // création d'une div virtuelle en js
        let cardStudent = document.createElement('div');
        cardStudent.classList.add('card');

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
        cardStudent.appendChild(newImg);
        cardStudent.appendChild(newName);

        // On ajoute à la grille la div virtuelle
        gridEleve.appendChild(cardStudent);
        
        //Reinitialisation de l'input prénom et du choix d'avatar
        inputPrenomApprenant.value = "";
        avatarChoice = "";
        avatarButton.innerHTML = `Choisir un avatar`;
        
        students.push(cardStudent);
      }
    };
     
  function handleStudentDisplay() { 
    
    const studentRandom = [...students]; // copie du tableau pour stocker les apprenants
    
    for (let i = studentRandom.length - 1; i > 0; i -= 1) { // mélange le tableau de façon aléatoire
      const randomNumber = Math.floor(Math.random() * (i + 1));
      const temp = studentRandom[i]; // shuffle les éléments grâce a l'algo de Fisher-Yates
      studentRandom[i] = studentRandom[randomNumber];
      studentRandom[randomNumber] = temp;
    }

    const virtualDivs= document.querySelectorAll('.card');  

    virtualDivs.forEach((virtualDiv, index) => { 
      gridEleve.appendChild(studentRandom[index]);
    });
    
  const row1 = document.querySelector('.row-1');
  const row2 = document.querySelector('.row-2');
  const row3 = document.querySelector('.row-3');

  row1.innerHTML = '';
  row2.innerHTML = '';
  row3.innerHTML = '';

  for (let i = 0; i < 7 ; i++) {
    row1.appendChild(studentRandom[i]);
  }

  row2.appendChild(studentRandom[7]);

  for (let i = 8; i < 15 ; i++) {
    row3.appendChild(studentRandom[i]);
  }

  };

});