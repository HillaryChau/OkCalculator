//Insert input1 and input 2 in forms and form 2
//Click Results button
  //comp goes to dom to look go input 1 value
  //comp look gor and identigy input 2
  //Press button (button will be + - * /)
  //formula to apply input one and input 2
  // need results shown in the inner text of bottom section.

  // hit reset button
  //reset does the reset.

//Guthemberg and Kevin S. helped
let num1 = document.querySelector("#leftNum")
let num2 = document.querySelector("#rightNum")

document.querySelector('#add').addEventListener('click', plus)
  function plus(){
    console.log(num1,num2)
    let sum = Number(num1.value) + Number(num2.value)
    document.querySelector('#answer').innerText = sum
    console.log(sum)
}

document.querySelector('#subtract').addEventListener('click', minus)
  function minus(){
  let difference = parseInt(num1.value)- parseInt(num2.value)
  document.querySelector("#answer").innerText = difference
}

document.querySelector('#multiply').addEventListener('click', times)
  function times(){
  let product = Number(num1.value)* Number(num2.value)
  document.querySelector("#answer").innerText = product
}

document.querySelector('#divide').addEventListener('click', divide)
  function divide(){
    let quotient = Number(num1.value)/ Number(num2.value)
    document.querySelector("#answer").innerText = quotient
  }

document.querySelector('#reset').addEventListener('click',reset)
function reset(){
  document.querySelector("#answer").innerText = ""
  document.querySelector("#leftNum").value = ""
  document.querySelector("#rightNum").value = ""
}
