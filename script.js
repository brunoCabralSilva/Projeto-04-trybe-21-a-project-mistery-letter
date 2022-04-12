const botaoGeraFrase = document.getElementById('criar-carta');
const inputFrase = document.getElementById('carta-texto');
const getP = document.getElementById('carta-gerada');
let fragmentoCorrigido = [];

botaoGeraFrase.addEventListener('click', function() {
  fragmentoCorrigido = inputFrase.value.split(' ');
  for (let i =0; i < fragmentoCorrigido.length; i += 1){
    let setPalavra = document.createElement ('span');
    setPalavra.classList.add('palavraFrase');
      setPalavra.innerText = fragmentoCorrigido[i];
      getP.appendChild(setPalavra);
  }

});
