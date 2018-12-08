function celsiustofahrenheit(){
   let cels = prompt("Enter a temperature you would like to convert from Celsius to Fahrenheit: ");
   let fahr = ((cels * 9 / 5) + 32).toFixed(2);
   var div = document.getElementById("celsius-to-fahrenheit-output");
   div.innerHTML = cels + " degrees Celsius = " + fahr + " degrees Fahrenheit.";
}

function kelvintocelsius(){
  let kelv = prompt("Enter a temperature you would like to convert from Kelvin to Celsius: ");
  let cels = (kelv-273.15).toFixed(2);
  var div = document.getElementById("kelvin-to-celsius-output");
  div.innerHTML = kelv + " degrees Kelvin = " + cels + " degrees Celsius.";
}

function kelvintofahrenheit(){
  let kelv = prompt("Enter a tempreature you would like to convert from Kelvin to Fahrenheit.");
  let fahr = ((9 / 5)*(kelv - 273) + 32).toFixed(2);
  var div = document.getElementById("kelvin-to-fahrenheit-output");
  div.innerHTML= kelv + " degrees Kelvin = " + fahr + " degrees Fahrenheit.";
}

function fahrenheittocelsius(){
  let fahr = prompt("Enter a tempreature you would like to convert from Fahrenheit to Celsius.");
  let cels = ((5 / 9)*(fahr - 32)).toFixed(2);
  var div = document.getElementById("fahrenheit-to-celsius-output");
  div.innerHTML = fahr + " degrees Fahrenheit = " + cels + " degrees Celsius.";
}

// function fahreinheittokelvin(){
//   let fahr = prompt("Enter a tempreature you would like to convert from Fahrenheit to Kelvin.");
//   let kelv = ((5/9)*(fahr - 32) + 273).toFixed(2);
//   var div = document.getElementById("fahrenheit-to-kelvin-output");
//   div.innerHTML = fahr + " degrees Fahrenheit = " + kelv + " degrees Kelvin.";
// }
// function celsiustokelvin(){
//    let cels = prompt("Enter a temperature you would like to convert from Celsius to Kelvin: ");
//    let kelv = (cels + 273).toFixed(2);
//    var div = document.getElementById("celsius-to-kelvin-output");
//    div.innerHTML = cels + " degrees Celsius = " + kelv + " degrees Kelvin.";
// }
function windspeed(){
  windspeed = -1;
  while (windspeed < 0 || Number.isInteger(windspeed)==false){
      windspeed = Number(prompt("Enter a positive windspeed in miles per hour. Enter the value only."));
  }
  var div=document.getElementById("windspeed-output");
  if (windspeed >= 39 && windspeed <= 73) {
    div.innerHTML = "Tropical Storm.";
  } else if (windspeed>= 0 && windspeed <=38){
    div.innerHTML = "The skies are calm...";
  } else if (windspeed >= 74 && windspeed <= 95) {
    div.innerHTML = "Category 1 Hurricane.";
  } else if (windspeed >= 96 && windspeed <= 110) {
    div.innerHTML = "Category 2 Hurricane.";
  } else if (windspeed >= 111 && windspeed <= 129) {
    div.innerHTML = "Category 3 Hurricane.";
  } else if (windspeed >= 130 && windspeed <= 156) {
    div.innerHTML = "Category 4 Hurricane.";
  } else if (windspeed >= 157) {
    div.innerHTML = "Category 5 Hurricane.";
  }
}
