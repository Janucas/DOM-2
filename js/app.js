//1) Eliminar el primer elemento hijo desde el padre.
let dad = document.querySelector("#cardContainer");

let firstChildElement = dad.children[0];
firstChildElement.remove();

//2) Eliminar, desde él mismo, el elemento cuya clase es "cards redClass".
let secondChildElement = dad.children[0];
secondChildElement.remove();

//3) Crear un elemento h1 con vuestro nombre.
let h1 = document.createElement("h1");
h1.textContent = "Juan Antonio";

//4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
let link = document.createElement("A");
link.textContent = "Vedruna";
link.href = "https://vedrunasevilla.org/";

//5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
let button = document.createElement("button");
button.id = "botonJoker";
button.textContent = "boton";

//6) Crear un elemento div cuya clase sea "cards greenClass".
let div = document.createElement("div");
div.className = "cards greenClass";

//7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente
div.appendChild(h1);
div.appendChild(link);
div.appendChild(button);

//8) Añadir a cardContainer el div del apartado anterior.
dad.appendChild(div);