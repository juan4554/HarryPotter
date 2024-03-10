//trae la info de la API con fetch

const url = "https://harry-potter-api.onrender.com/personajes";
const HTMLResponse = document.querySelector("main");

fetch(url)
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      const section = document.createElement("section");

      const magoElement = document.createElement("p");
      magoElement.textContent = `Nombre Mago: ${user.personaje}`;
      section.appendChild(magoElement);

      const magelElement = document.createElement("p");
      magelElement.textContent = `Nombre Magel: ${user.interpretado_por}`;
      section.appendChild(magelElement);

      HTMLResponse.appendChild(section);
     });
  });
  	 










// const url = "https://harry-potter-api.onrender.com/personajes"
// const HTMLResponse = document.querySelector("main");
// const ul = document.createDocumentFragment('section');

// fetch(url)
// .then (response => response.json())

// 	// const tpl = data.map(personaje=>`<li>Nombre Mago:${personaje.personaje}  Nombre Magel:${personaje.interpretado_por}</li>`);
// 	// HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
// .then ((users) => {
// 	users.forEach((user) => {
// 		const elem = document.createElement("section");
// 		elem.appendChild(
// 			document.createTextNode(`Nombre Mago:${user.personaje}`)
			
// 		);
// 		const elem2 = document.createElement("section");
// 		elem2.appendChild(
// 			document.createTextNode(`Nombre Magel:${user.interpretado_por}`)
// 		);
// 		ul.appendChild(elem);
// 		ul.appendChild(elem2);
// 	});
// 	HTMLResponse.appendChild(ul);
		
// });

// //Trae toda la info de la API Con XMLHttpRequest

// const url = "https://harry-potter-api.onrender.com/personajes"

// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if( this.readyState === 4 && this.status === 200) {
//         console.log(this.response);
// 		const data = JSON.parse(this.response);
// 		const HTMLResponse = document.querySelector("main");
// 		const tpl = data.map(personaje=>`<li>Nombre Mago:${personaje.personaje}  Nombre Magel:${personaje.interpretado_por}</li>`);
// 		HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//      }
// }
// xhr.addEventListener("load", onRequestHandler);
// xhr.open("GET", `${url}`);
// xhr.send();


