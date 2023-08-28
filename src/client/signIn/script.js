const getRazas = async () => {
  const res = await fetch("http://localhost:3000/api/razasGatos");
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
