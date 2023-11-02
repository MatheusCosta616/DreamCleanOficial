export function menu(){
    const menuBtn = document.querySelector(".menu-btn");
    const menuItems = document.querySelector(".itens");

    menuBtn.addEventListener("click", () => {
    menuItems.classList.toggle("active");
});
}