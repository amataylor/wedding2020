// TODO nav__list to toggle when burger is clicked
const menu_icon = document.querySelector('.nav__burger');
const menu_list = document.querySelector('.nav__list');

menu_icon.addEventListener('click', () => {
    const nav_default = 'nav__burger--default';
    const nav_toggle = 'nav__burger--toggled';

    const menu_default = 'nav__list--default';
    const menu_toggle = 'nav__list--toggled';

    if (menu_icon.classList.contains(nav_default)) {
        menu_icon.classList.remove(nav_default);
        menu_list.classList.remove(menu_default);
        menu_list.classList.add(menu_toggle);
    }
    if (menu_icon.classList.contains(nav_toggle)) {
        menu_icon.classList.remove(nav_toggle);
        menu_list.classList.remove(menu_toggle);
    } else {
        menu_icon.classList.add(nav_toggle);
        menu_list.classList.add(menu_toggle);
    }
});
