
function showSection(sectionId) {
  
  document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('data-section');
      showSection(sectionId);
  });
});

document.getElementById('company-name').addEventListener('click', () => {
  showSection('home');
});
