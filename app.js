const btnSim = document.querySelector("#sim")
const btnNao = document.querySelector("#nao")
btnSim.addEventListener("click",function sim(){
    alert("ISSUUUUUUU")
});
btnNao.addEventListener("mouseover",function nao(){
    btnNao.style.bottom = geraPosicao(0, 90);
    btnNao.style.left = geraPosicao(0, 90);
    console.log("NÃO");
});
randomNumber(0,100);
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}