const ButtonMobile = document.querySelector('[data-menu="button"]');
const lista = document.querySelector('[data-menu="menuList"]');
const buttonCloseMenu = document.querySelector('[data-menu="close"]');
console.log(buttonCloseMenu);

const getBody = document.body;

getBody.addEventListener("click", (e) => {
  if (e.target === lista || e.target === ButtonMobile) {
    lista.classList.add("active");
    console.log("Dentro");
  } else if (e.target !== lista) {
    lista.classList.remove("active");
    console.log("Fora");
  }
});

buttonCloseMenu.addEventListener("click", (e) => {
  e.preventDefault();
  lista.classList.remove("active");
});
