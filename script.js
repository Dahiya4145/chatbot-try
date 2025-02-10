document.getElementById('toggleLogin').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    this.classList.add('active');
    document.getElementById('toggleRegister').classList.remove('active');
});

document.getElementById('toggleRegister').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    this.classList.add('active');
    document.getElementById('toggleLogin').classList.remove('active');
});

// Prevent form submission for demonstration purposes
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('Form submitted successfully!');
    });
});
