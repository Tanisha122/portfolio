// Get elements
const showMoreBtn = document.getElementById('showMoreBtn');
const backToFirstPageBtn = document.getElementById('backToFirstPageBtn');
const landingSection = document.getElementById('landing');
const hiddenSections = document.querySelectorAll('.hidden');

// Log to check if the script is running
console.log('JavaScript is loaded!');

// Show more sections and hide landing page when "Next Page" button is clicked
showMoreBtn.addEventListener('click', function() {
    // Show hidden sections
    hiddenSections.forEach(section => section.classList.remove('hidden'));

    // Hide the landing page
    landingSection.style.display = 'none';

    // Hide the "Next Page" button
    showMoreBtn.style.display = 'none';

    // Show the "Back to First Page" button
    backToFirstPageBtn.style.display = 'inline-block';
});

// Back to first page, hide other sections and show the landing page again when "Back to First Page" button is clicked
backToFirstPageBtn.addEventListener('click', function () {
    // Hide the sections
    hiddenSections.forEach(section => section.classList.add('hidden'));

    // Show the landing page
    landingSection.style.display = 'block';

    // Show the "Next Page" button
    showMoreBtn.style.display = 'inline-block';

    // Hide the "Back to First Page" button
    backToFirstPageBtn.style.display = 'none';
});
console.log("Script is loaded!");
