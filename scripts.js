// Function to show the selected section
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add('active');
}

// Event listeners for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('data-section');
      showSection(sectionId);
  });
});

// Event listener for the company name to redirect to the home section
document.getElementById('company-name').addEventListener('click', () => {
  showSection('home');
});
