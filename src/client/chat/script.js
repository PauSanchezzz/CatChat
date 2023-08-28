const conversaciones = document.getElementById("conversaciones");
const getRazas = async () => {
  const res = await fetch("http://localhost:3000/api/razasGatos");
  const data = await res.json(res);
  return await data;
};

const cargarDatos = async () => {
  const razas = await getRazas();
  razas.forEach((element) => {
    const section = document.createElement("section");
    section.setAttribute(
      "class",
      "border-2 border-rose-900 bg-[#E3B8B7] rounded-xl text-rose-800 flex justify-center items-center font-bold"
    );
    option.value = element.nombreraza;
    option.text = `Grupo ${element.nombreraza}`;
    select.add(option);
  });
};
cargarDatos();
//conversaciones.innerText =
