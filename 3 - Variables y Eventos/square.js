// Para declarar una variable en javascript tenemos que escribir primero
// "let" y luego el nombre de la variable, el cual puede ser cualquiera que 
// queramos, pero no puede empezar por un numero, ni puede contener espacios. El
// nombre tiene que ser escrito en minusculas y debe ser lo más descriptivo 
// posible. Otras alternativas son sustituir "let" por las palabras "var" (en desuso)
// o "const" (para declarar constantes).

export default (() => {

  // En este caso la variable "square" hace referencia a un elemento
  // HTML que se encuentra en el archivo index.html, que tiene una id "square".
  let square = document.getElementById("square");
  // En la siguiente linea se establece un evento que se ejecutara cada vez
  // que se presione el elemento de la variable square (es decir, el elemento
  // HTML que tiene una id "square"). Aquí una lista de los eventos disponibles
  // en javascript: https://www.w3schools.com/jsref/dom_obj_event.asp

  if (square) {
    square.addEventListener("mouseenter", () => {
      let rand=Math.random();
      // En la siguiente línea se añade una clase "active" al elemento HTML que tiene
      // una id "square" si no tiene la clase, y se la quita si la tiene.  
      console.log(rand);
      if(rand<=0.2){
        clear(square);
        square.classList.add("active1");
      } else if((rand>=0.2) && (rand<0.4)){
        clear(square);
        square.classList.add("active2");
      } else if((rand>=0.4) && (rand<0.6)){
        clear(square);
        square.classList.add("active3");
      } else if((rand>=0.6) && (rand<0.8)){
        clear(square);
        square.classList.add("active4");
      } else if((rand>=0.8) && (rand<1)){
        clear(square);
        square.classList.add("active5");
      }

    });
  }
function clear(square){
  square.classList.remove("active1");
  square.classList.remove("active2");
  square.classList.remove("active3");
  square.classList.remove("active4");
  square.classList.remove("active5");
}
})();
