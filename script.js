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
