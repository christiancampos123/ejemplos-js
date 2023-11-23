// Para que un modulo se pueda cargar externamente debemos escribir
// la palabra reservada "export" y luego el nombre del modulo


//enm tabs estas exportando algo, en este caso una variable, cada vez que se llame la palabra rendertabs se equivaldra a eso

export let renderTabs = () => {
  console.log("hola");

  // Aquí añadimos el código de nuestra función
}

export let renderTabs1 = () => {
  console.log("hola1");

  // Aquí añadimos el código de nuestra función
}

export let renderTabs2 = () => {
  console.log("hola2");
  // Aquí añadimos el código de nuestra función
}

export let renderTabs4 = () => {

  // Aquí añadimos el código de nuestra función
  console.log("hola4");
}