// selection.js

// Sélectionner tous les boutons "Start Quiz"
const startQuizButtons = document.querySelectorAll('.start-quiz');

// Ajouter un événement au clic sur chaque bouton "Start Quiz"
startQuizButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Récupérer les informations sur la catégorie et le niveau
        const category = button.dataset.category;
        const level = button.dataset.level;

        // Stocker les informations dans le localStorage pour les utiliser dans la page du quiz
        localStorage.setItem('selectedCategory', category);
        localStorage.setItem('selectedLevel', level);

        // Rediriger l'utilisateur vers la page du quiz
        window.location.href = 'page2.html'; // page du quiz
    });
});
startQuizButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Récupérer les informations sur la catégorie et le niveau
        const category = button.dataset.category;
        const level = button.dataset.level;

        // Stocker les informations dans le localStorage pour les utiliser dans la page du quiz
        localStorage.setItem('selectedCategory', category);
        localStorage.setItem('selectedLevel', level);

        // Rediriger l'utilisateur vers la page du quiz
        window.location.href = 'page2.html'; // page du quiz
    });
});
