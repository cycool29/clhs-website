navbar = document.getElementById("top-nav-bar");

// When the user scrolls down 20px from the top of the document, change navbar color
window.onscroll = function() {
    changeColor()
};

function changeColor() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.color = "white";
    }
}

function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}