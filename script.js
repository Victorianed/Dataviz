const navLinks = document.querySelectorAll('nav ul li a');

const contents = document.querySelectorAll('.content');

// Ajouter un gestionnaire d'événement pour chaque lien de la barre de navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Masquer tous les contenus
    contents.forEach(content => {
      content.classList.remove('active');
    });

    const tabId = link.getAttribute('href').substring(1);

    // Afficher le contenu de l'onglet correspondant
    const tabContent = document.getElementById(tabId);
    tabContent.classList.add('active');
  });
});

// Afficher le contenu initial
window.onload = () => {
  document.getElementById('accueil').classList.add('active');
};
