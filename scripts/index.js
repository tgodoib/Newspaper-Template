let root = document.documentElement;

// Muda as variaveis do CSS para a posição do mouse atual
root.addEventListener("mousemove", e => {
    root.style.setProperty('--mouse-x', e.clientX + "px");
    root.style.setProperty('--mouse-y', e.clientY + "px");
});

// Muda a opacidade da página home dependendo da posição do scroll
window.addEventListener('scroll', function (e) {
    let opacity = 100 * (1 - (1.5 * window.pageYOffset / root.clientHeight));

    document.getElementById("home").style.opacity = opacity + "%";
    document.getElementById("home-effects").style.opacity = opacity + "%";
});
