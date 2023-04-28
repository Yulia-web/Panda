export function burgerMenu() {
    let $menu = document.getElementsByClassName('header_burger')[0];
    $menu .addEventListener('click', function (event) {
        $menu.classList.toggle("active");
        document.getElementsByClassName('header_menu')[0].classList.toggle("active");
    });
}