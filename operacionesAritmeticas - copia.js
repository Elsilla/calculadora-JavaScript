const sum = function(a, b) {
  return a + b
}
const rest = function(a, b) {
  return a - b
}
const multi = function(a, b) {
  return a * b
}
const div= function(a, b) {
  if (b == 0) return console.log("sorry, no se puede dividir por cero 😛")
  return a / b
}
const mod = function(a, b) {
  return a % b
}
const pot= function(a, b) {
  return a ** b
}
const raiz = function(a) {
  if (a <= 0)  return "Brrr... No se puede calcular raiz negativa 😖"
  return Math.sqrt(a);
}

const operaciones = function(opcion) {
  let resultado;
  let num1 = 3
  let num2 = 3
  let mensaje_salida = "Listo! Terminamos"

  switch (opcion) {
    case 1:
      resultado = sum(num1, num2)
      console.log("➕ El resultado de la suma es:", resultado)
      return mensaje_salida
    case 2:
      resultado = rest(num1, num2)
      console.log("➖ El resultado de la resta es:", resultado)
      return mensaje_salida
    case 3:
      resultado = multi(num1, num2)
      console.log("✖ El resultado de la multiplicacion es:", resultado)
      return
    case 4:
      resultado = div(num1, num2)
      console.log("➗ El resultado de la division es:", resultado)
      return mensaje_salida
    case 5:
      resultado = mod(num1, num2)
      console.log("⚪ El resultado de la residuo de la division es:", resultado)
    case 6:
      resultado = pot(num1, num2)
      console.log("🟢 El resultado de la potencia es:", resultado)
      return mensaje_salida
    case 7:
      resultado = raiz(num1)
      console.log("🟡 El resultado de la raiz es:", resultado)
      return mensaje_salida
    case _:
      return console.log("Error! 🤣 jajaj Ingresa bien los datos!")
  }
}
operaciones(1)

