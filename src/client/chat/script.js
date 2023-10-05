const socket = io();
const btnSend = document.getElementById("send");

const conversaciones = document.getElementById("conversaciones");

const getRazas = async () => {
  const res = await fetch(
    "https://catchat-production-db34.up.railway.app/api/razasGatos"
  );
  const data = await res.json();
  return data;
};

//Chat
const getUserCookie = async () => {
  let cookieValue = document.cookie.replace(
    //expresion regulares,
    /email=([^;]*)/,
    "$1"
  );
  const res = await fetch(
    `https://catchat-production-db34.up.railway.app/api/user/${cookieValue}`
  );
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return data.usuario[0];
};

const cargarDatos = async () => {
  const razas = await getRazas();
  razas.forEach((element) => {
    const section = document.createElement("section");
    section.innerHTML = `
       <section
              class="max-lg:hidden hover:pointer p-2 border-2 border-rose-900 bg-[#E3B8B7] rounded-xl text-rose-800 flex justify-center items-center font-bold"
              id="${element.nombreraza}"
              >
        <p>Grupo ${element.nombreraza}</p> 
         <img class="w-[3em] h-[3em] mx-5 rounded-full border-2 border-rose-900" src="${element.imagen}" alt=""/>
       </section>`;
    conversaciones.appendChild(section);
  });
};
cargarDatos();

const title = document.getElementById("raza-chat");
const datosChat = async () => {
  const user = await getUserCookie();
  if (user) {
    title.innerHTML = ` 
    <img class="max-lg:mx-2 my-auto w-[3.5em] h-[3.5em] mx-5 rounded-full border-2 border-rose-900" 
    src="${user.imagen}" alt="" />
    <h1 class="col-span-2 text-rose-800 flex justify-center items-center font-bold" > 
    Grupo ${user.nombreraza}</h1> `;
  } else {
    title.innerHTML = ` 
    <img class="lg:mx-2, w-[3.5em] h-[3.5em] mx-5 rounded-lg border-2 border-rose-900" 
    src="../public/perro.jpg" alt="" />
    <h1 class="lg:grid col-span-3 ml-1,col-span-2 text-rose-800 flex justify-center items-center font-bold" > 
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
});

const main = async () => {
  let socketNameSpace;
  const user = await getUserCookie();
  console.log("user.nombreraza  " + (await user.nombreraza));
  if (user.nombreraza === "Tuxedo") {
    socketNameSpace = io("/Tuxedo");
  }
  if (user.nombreraza === "Bombay") {
    socketNameSpace = io("/Bombay");
  }
  if (user.nombreraza === "Siames") {
    socketNameSpace = io("/Siames");
  }
  if (user.nombreraza === "Calico") {
    socketNameSpace = io("/Calico");
  }
  if (user.nombreraza === "Carey") {
    socketNameSpace = io("/Carey");
  }
  const messageInput = document.getElementById("message");

  const sendMessage = () => {
    const message = messageInput.value;
    socketNameSpace.emit("send-message", {
      user: user.nomusuario,
      message: message,
    });
    messageInput.value = "";
  };

  btnSend.addEventListener("click", () => {
    sendMessage();
  });
  messageInput.addEventListener("keydown", () => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  socketNameSpace.on("sendToAll", ({ user, message }) => {
    const allMessages = document.getElementById("all-message");
    allMessages.innerHTML += `
               <p
              class="pb-2 pl-6 font-extrabold text-l text-rose-800 text-center col-span-1 underline decoration-wavy decoration-rose-900/60"
            >
              ${user}
            </p>

            <p
              class="bg-[#FFDEE2] rounded-tr-3xl rounded-bl-3xl px-4 py-2 border-2 border-rose-900 font-medium italic"
            >${message}
            </p>`;
  });
  socket.on("connect", () => {
    console.log("socket io front " + socket.id);
  });
};
main();

const validateRaza = async () => {
  const razas = await getRazas();
  const user = await getUserCookie();
  razas.forEach((element) => {
    const section = document.getElementById(element.nombreraza);
    section.addEventListener("click", () => {
      if (section.id === user.nombreraza) {
        const succes = Swal.fire({
          title: "¡Este es tu chat!",
          text: "Tienes permiso.",
          imageUrl: element.imagen,
          imageWidth: 170,
          imageHeight: 170,
          imageAlt: "imagen grupo",
        });
        return succes;
      }
      Swal.fire({
        title: "¡Este no es tu chat!",
        text: "No tienes permiso.",
        imageUrl: element.imagen,
        imageWidth: 170,
        imageHeight: 170,
        imageAlt: "imagen grupo",
      });
    });
  });
};

validateRaza();
