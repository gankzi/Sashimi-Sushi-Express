const menu = document.querySelector('.menu');
const menuSubMenu = document.querySelector('.menu-sub-menu');
const delivery = document.querySelector('.delivery');
const deliverySubMenu = document.querySelector('.delivery-sub-menu');

menu.addEventListener('mouseover', () => {
    menuSubMenu.style.display = "flex";
});

delivery.addEventListener('mouseover', () => {
    deliverySubMenu.style.display = "flex";
});

menuSubMenu.addEventListener('mouseout', () => {
    menuSubMenu.style.display = "none";
});

deliverySubMenu.addEventListener('mouseout', () => {
    deliverySubMenu.style.display = "none";
})
