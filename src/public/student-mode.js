// This script runs after the page is fully loaded
window.addEventListener('load', () => {
    // Check if the URL contains ?mode=student
    const urlParams = new URLSearchParams(window.location.search);
    const isStudentMode = urlParams.get('mode') === 'student';

    if (isStudentMode) {
        // If it's student mode, find all instances of "Penti" in the body of the page and replace them.
        const originalHTML = document.body.innerHTML;
        const updatedHTML = originalHTML.replace(/Penti/g, 'a leading retailer');
        document.body.innerHTML = updatedHTML;
    }
});
