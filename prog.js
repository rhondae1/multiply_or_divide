function getQuo(input) {
	return input / 10;
}


function getProd(input) {
	return input * 5;
}






function validateForm() {
  var num = document.getElementById("value").value;
  if (num === "") {
   alert("Must enter a value");
} else if (num > 10000) {
	output.innerHTML = getQuo(num);
} else if (num < 10000) {
	output.innerHTML = getProd(num);
}
        
}
    console.log(num.value)





