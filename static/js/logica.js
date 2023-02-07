const input_valor = (digito) => {
  const aux = document.getElementById("pantalla").innerHTML;
  document.getElementById("pantalla").innerHTML = aux + digito;
};
const limpiar = () => {
  document.getElementById("pantalla").innerHTML = "";
};

const resultado = async () => {
  let operacion = document.getElementById("pantalla").innerHTML;
  const request = await fetch("http://localhost:5000/solucion", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 0: operacion }),
  }).then((res) => res.json());

  if (request['status'] == false) {
    alert("la operacion esta mal ");
    limpiar()
  } else {
    document.getElementById('pantalla').innerHTML = request['operacion']
  }
};
