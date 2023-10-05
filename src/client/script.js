const boton = document.getElementById("boton");
boton.addEventListener("click", (event) => {
  event.preventDefault();
  sendData();
});

const sendData = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    //   alert("Por favor, complete todos los campos antes de crear el usuario.");
    Swal.fire(
      "Error",
      "Por favor, complete todos los campos para iniciar sesión.",
      "error"
    );
    return;
  }
  const res = await fetch(
    "https://catchat-production-db34.up.railway.app/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correo: email,
        clave: password,
      }),
    }
  );
  if (res.ok) {
    document.cookie = `email=${email};max-age=3600;path=/chat`;
    // alert("¡Bienvenido de Nuevo!");
    /**/
    Swal.fire("Ingreso Exitoso", "¡Bienvenido de Nuevo!", "success").then(
      function () {
        window.location = "/chat";
      }
    );
  } else {
    //alert("El usuario Incorrecto");
    Swal.fire("Error", "Usuario Incorrecto.", "error").then(function () {
      window.location = "./index.html";
    });
  }
};
