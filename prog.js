function getQuo(input) {
	return input / 10;
}

getQuo(10);

function getProd(input) {
	return input * 5;
}

getProd(5);

var num = document.getElementById("value").addEventListener("click", checkValue);
var checkValue = ""

function validateForm() {
  if (num.value === "") 
   alert("Must enter a value");
        
    }
    console.log(num.value)



