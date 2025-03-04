document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector(".navbar");
    
    const handlemousemove = (e) => {
        if(e.clientY <= 50){
            navbar.classList.remove("navbar-hidden");
        }else{
            navbar.classList.add("navbar-hidden");
        };
    };
    
    document.addEventListener("mousemove", handlemousemove);

});