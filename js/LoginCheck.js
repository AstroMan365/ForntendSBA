document.addEventListener('DOMContentLoaded', function() { 
    <script src="../js/validation.js"></script> 
    const isLoggedIn = false; // Replace with actual login check 
    if (!isLoggedIn) {
        // Delay the redirect by 3 seconds (3000 milliseconds)
        setTimeout(function() {
            window.location.href = "pages/login.html"; 
        }, 3000);
    } 
});
