const input_valor = (digito) => {
  const aux = document.getElementById("pantalla").innerHTML;
  document.getElementById("pantalla").innerHTML = aux + digito;
};
const limpiar = () => {
  document.getElementById("pantalla").innerHTML = "";
};

const resultado = async () => {
  let operacion = document.getElementById("pantalla").innerHTML;
  document.getElementById('pantalla').innerHTML = eval(operacion)
};
