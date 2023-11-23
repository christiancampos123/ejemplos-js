export default (() => {

  console.log(document.getElementById("menu-button").textContent);
  console.log(document.getElementById("menu-button").addEventListener(miFuncion));
  // bsuca un elemento # significa id, es otra manera de pasarle lo que buscar. #id, .class aqui solo el primero
  console.log(document.querySelector("#menu-button"));
  // todos los elementos que coincidan devuelve una lista de nodos y puedes te permite usar foreach, entrys...
  console.log(document.querySelectorAll(".menu-item"));
  // este devuelve una htlm collection es peor, mejor usa el query selector all. Esto es un alista dinamica, 
  // si se añaden nuevos elementos a la colección, la lista se actualiza dinamicamente, la de node no se actualizaria.
  console.log(document.getElementsByClassName("menu-item"));
  console.log(document.getElementsByTagName("li"));
  console.log(document.getElementsByName("menu-item"));
  console.log(document.querySelector("li:nth-child(2)"));

})();