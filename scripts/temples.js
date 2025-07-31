const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');
const headerh1 = document.querySelector('header h1');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');    

    if (navMenu.classList.contains('open')){
        menuButton.textContent = 'X';
        headerh1.style.display = 'none';
    } else {
        menuButton.textContent = '☰';
        headerh1.style.display = 'block';
    }
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;