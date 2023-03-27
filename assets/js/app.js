const sobremi = document.getElementById("sobremi");
const page2 = document.getElementById("page2");
const inicio = document.getElementById("inicio");

console.log(inicio);

sobremi.addEventListener("click", ()=>{
    page2.classList.add("entrar");
});

inicio.addEventListener("click", ()=>{
    page2.classList.remove("entrar");
});