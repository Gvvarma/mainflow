document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the visibility of content sections
    function showContent(sectionId) {
        const sections = document.querySelectorAll('.content-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    // Function to validate the contact form
    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            return false;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to add dynamic content to the page
    function addDynamicContent() {
        const dynamicInput = document.getElementById('dynamicInput').value.trim();

        if (!dynamicInput) {
            alert('Please enter some content.');
            return false;
        }

        const dynamicContentDiv = document.getElementById('dynamicContent');
        const newContent = document.createElement('p');
        newContent.textContent = sanitizeInput(dynamicInput);
        dynamicContentDiv.appendChild(newContent);

        document.getElementById('dynamicForm').reset();
        return false; // Prevent form submission
    }

    // Function to sanitize user input to prevent XSS attacks
    function sanitizeInput(input) {
        const element = document.createElement('div');
        element.innerText = input;
        return element.innerHTML;
    }

    // Attach event listeners
    window.showContent = showContent;
    window.validateForm = validateForm;
    window.addDynamicContent = addDynamicContent;
});