//import { response } from "express";

const conversaciones = document.getElementById("conversaciones");

const getRazas = async () => {
  const res = await fetch("http://localhost:3000/api/razasGatos");
  const data = await res.json();
  return data;
};

const cargarDatos = async () => {
  const razas = await getRazas();
  razas.forEach((element) => {
    const section = document.createElement("section");
    section.innerHTML = `
       <section
              class="p-2 border-2 border-rose-900 bg-[#E3B8B7] rounded-xl text-rose-800 flex justify-center items-center font-bold"
            >
         Grupo ${element.nombreraza}
         <img class="w-[3em] h-[3em] mx-5 rounded-full border-2 border-rose-900" src="${element.imagen}" alt=""/>
       </section>`;
    conversaciones.appendChild(section);
  });
};

cargarDatos();

//Chat
const getUserCookie = async () => {
  let cookieValue = document.cookie.replace(
    //expresion regulares,
    /email=([^;]*)/,
    "$1"
  );
  const res = await fetch(`http://localhost:3000/api/user/${cookieValue}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.usuario[0];
};

const title = document.getElementById("raza-chat");
const datosChat = async () => {
  const user = await getUserCookie();
  if (user) {
    title.innerHTML = ` 
    <img class="w-[3.5em] h-[3.5em] mx-5 rounded-full border-2 border-rose-900" 
    src="${user.imagen}" alt="" />
    <h1 class="col-span-2 text-rose-800 flex justify-center items-center font-bold" > 
    Grupo ${user.nombreraza}</h1> `;
  } else {
    title.innerHTML = ` 
    <img class="w-[3.5em] h-[3.5em] mx-5 rounded-lg border-2 border-rose-900" 
    src="../public/perro.jpg" alt="" />
    <h1 class="col-span-2 text-rose-800 flex justify-center items-center font-bold" > 
    ¡Usted no tiene permisos! </h1> `;
  }
};
datosChat();

const btnSalir = document.getElementById("salir");
console.log("btn " + btnSalir);
btnSalir.addEventListener("click", (event) => {
  event.preventDefault();
  document.cookie = `email=;max-age=0;path=/chat`;
  Swal.fire("¡Vuelva Pronto!", "", "success").then(function () {
    window.location = "../index.html";
  });
  /*   const si = confirm("¡Vuelva Pronto!");
  if (si) {
    window.location = "/index.html";
  } */
});
