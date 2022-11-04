 const horas = document.getElementById("horas");
 const minutos = document.getElementById("minutos");
 const segundos = document.getElementById("segundos");

 const relogin = setInterval( function time(){
    
    let dataHoje = new Date();
    let minhaHora = dataHoje.getHours();
    let meuMinutos = dataHoje.getMinutes();
    let meuSegundos = dataHoje.getSeconds();

    if(minhaHora < 10) minhaHora = "0" + minhaHora;

    if(meuMinutos < 10) meuMinutos = "0" + meuMinutos;

    if(meuSegundos < 10) meuSegundos = "0" + meuSegundos;

    horas.textContent = minhaHora;
    minutos.textContent = meuMinutos;
    segundos.textContent = meuSegundos;

 })