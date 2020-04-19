(() => {
    const button = document.querySelector(".js-main-nav__mobile-button");
    const menu = document.querySelector(".js-main-nav__menu")

    const toggleClass = () => {
        menu.classList.toggle("main-nav__menu--open");
    };

    button.addEventListener("click", toggleClass);
    menu.addEventListener("click", toggleClass);
})();