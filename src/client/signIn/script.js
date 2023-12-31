const getRazas = async () => {
  const res = await fetch(
    "https://catchat-production-db34.up.railway.app/api/razasGatos"
  );
  const data = await res.json(res);
  return await data;
};

const select = document.getElementById("listRazas");
const cargarDatos = async () => {
  const razas = await getRazas();
  razas.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.nombreraza;
    option.text = element.nombreraza;
    select.add(option);
  });
};

cargarDatos();

//Enviar datos al server
const boton = document.getElementById("boton");
boton.addEventListener("click", (event) => {
  event.preventDefault();
  sendData();
});
/* */

const validateData = (email, password, user, raza) => {
  if (!email || !password || !user || !raza) {
    //alert("Por favor, complete todos los campos antes de crear el usuario.");
    Swal.fire(
      "Error",
      "Por favor, complete todos los campos para crear el usuario.",
      "error"
    );
    return false;
  }

  let vEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  let validate = vEmail.test(email);
  if (!validate) {
    Swal.fire("Error", "La estructura del correo es incorrecta.", "error");
    return false;
  }
  return true;
};

const sendData = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = document.getElementById("user").value;
  const raza = document.getElementById("listRazas").value;

  if (validateData(email, password, user, raza)) {
    Swal.fire({
      title: "¿Esta seguro que desea crear el usuario?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#A6E582",
      cancelButtonColor: "#E86868",
      confirmButtonText: "Crear",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          "https://catchat-production-db34.up.railway.app/api/auth/signin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              correo: email,
              clave: password,
              nomUsuario: user,
              raza: raza,
            }),
          }
        );
        if (!res.ok) {
          Swal.fire(
            "Error",
            "El usuario ya se encuentra registrado.",
            "error"
          ).then(function () {
            window.location = "./index.html";
          });
        } else {
          document.cookie = `email=${email};max-age=3600;path=/chat`;
          // alert("El usuario fue creado");

          // window.location = "/chat";
          Swal.fire("¡Bienvenido!", "El usuario fue creado.", "success").then(
            function () {
              window.location = "/chat";
            }
          );
        }
      } else {
        /*  alert("El usuario no fue creado");

      window.location = "./index.html"; */
        Swal.fire("Error", "Usuario no creado.", "error").then(function () {
          window.location = "./index.html";
        });
      }
    });
  }
};
