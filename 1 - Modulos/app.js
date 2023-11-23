// Para poder utilizar un módulo externo debemos importarlo en nuestro
// archivo principal. En este caso, el archivo principal es "app.js".
// En nodejs podemos utilizar la palabra "require" en vez 
// de "import" para importar un módulo. Entre las llaves debemos
// escribir el nombre del módulo que queremos importar. Finalmennte utilizamos
// "from" para indicar el nombre del archivo que contiene el módulo. 

// Llamar a la función que tiene la opción default del módulo menu-button.js

/* Hay 2 formas de importar un archivo, app.js importa el archivo de menu button. En el button hay un export, */ 
import './menu-button.js';

// Llamar a la función que se llama renderTabs del módulo tabs.js

// ahora cambia el tema, 
import {renderTabs} from './tabs.js'; //en caso de que el archivo tenga mas funciones decides cual ejecutar, en este caso renderTabs

import {renderTabs2 ,renderTabs1, renderTabs4} from './tabs.js';
renderTabs();
renderTabs2();
renderTabs4();
