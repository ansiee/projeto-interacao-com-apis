var nome = document.getElementById("nome");
var imagem = document.getElementById("imagem");
var ocupacao = document.getElementById("ocupacao");
var nomeDois = document.getElementById("nome-2");
var bio = document.getElementById("bio");
var meusSeguidores = document.getElementById("meus-seguidores");
var imgSeguidor = document.getElementsByClassName("imagem-seguidor");
var nomeSeguidor = document.getElementsByClassName("nome-seguidor");

let quantidadeSeguidores = 6;
var maisSeguidores = document.getElementById("maisSeguidores");
let seguidoresTotal;

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.github.com/users/ansiee")
    .then(function (response) {
      return response.json();
    })
    .then(function (objects) {
      console.log(objects.name);
      nome.innerHTML = `${objects.name}`;

      imagem.src = `${objects.avatar_url}`;

      ocupacao.innerHTML = `${objects.company}`;

      nomeDois.innerHTML = `${objects.name}`;

      bio.innerHTML = `${objects.bio}`;
    });

  getFollowers();
});

maisSeguidores.addEventListener("click", () => {
  quantidadeSeguidores = seguidoresTotal
   getFollowers();

   maisSeguidores.style.display = 'none'
   
});

function getFollowers() {
  fetch("https://api.github.com/users/ansiee/followers")
    .then(function (followers) {
      return followers.json();
    })
    .then(function (seguidores) {
      seguidoresTotal = seguidores.length;

      meusSeguidores.innerHTML = "";
      seguidores.map((item, i) => {
        if (i < quantidadeSeguidores) {
          meusSeguidores.innerHTML += `
                <div class="cardsFollow">
                <img src="${item.avatar_url}" alt="" class="imagem-seguidor">
                <h1 class="nome-seguidor">${item.login}</h1>
                </div>`;
        }
      });
    });
}
