const inputs = document.querySelectorAll(".input");
// usage of functions
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var button = document.getElementById("clicktoknowbutton");

button.onclick=(evt)=>{
    location.href = "#vege";
}
// vegetables

var vegetableList = ["1. Onion", "2. Tomato", "3. Potatos", "4. Cauli Flower", "5. Capsicum", "6. Cabbage", "7. Bitter Gourd", "8. Cucumber", "9. Pumpkin", "10. Brinjal"];
var i  = 0;
var x = "";

var buttonVege = document.getElementById("vegelist");

buttonVege.onclick=(evt)=>{
  if(i<vegetableList.length){
    x+=vegetableList[i++]+"<br>";
  }
  document.getElementById("vegeslist").innerHTML = x;
}

var nextPulses = document.getElementById("nextpulses");

nextPulses.onclick=(evt)=>{
  location.href = "#pulses";
}
// pulses
var nextPetrol = document.getElementById("nextpetrol");

nextPetrol.onclick=(evt)=>{
  location.href ="#petrol";
}

var pulsesList = ["1. Moong", "2. Toor", "3. Rajma", "4. Chana", "5. Flour"];

var j = 0;
var y = "";

var PulseButton = document.getElementById("pulseslists");

PulseButton.onclick=(evt)=>{
  if (j<pulsesList.length) {
    y+=pulsesList[j++]+"<br>";
  }
  document.getElementById("pulseslist").innerHTML = y;
}

// petrol

var buttonPetrol1 = document.getElementById("nextmedicines");

buttonPetrol1.onclick=(evt)=>{
  location.href = "#medicines";
}

// LTM

var nextLaptopsTabsMobiles = document.getElementById("nextLaptopsTabsMobiles");

nextLaptopsTabsMobiles.onclick=(evt)=>{
  location.href = "#laptops-mobiles-tabs";
}

var lmt = ["1. Laptop - Windows 10", "2. Mobile - iPhone 12 Pro", "3. Tablet -Galaxy Tab A"];
var g = 0;
var z = "";

var lmtButton = document.getElementById("listofltm");

lmtButton.onclick=(evt)=>{
  if (g<lmt.length){
    z+=lmt[g++]+"<br>";
  }
  document.getElementById("lmtlists").innerHTML = z;
}
// Home Loan
var nextHomeLoan = document.getElementById("nexthomeloan");

nextHomeLoan.onclick=(evt)=>{
  location.href = "#home-loan";
}

// cars

var nextCars = document.getElementById("nextcars");

nextCars.onclick=(evt)=>{
  location.href = "#cars";
}


var carList = ["1. Hyundai i20", "2. Tata Altroz", "3. Maruti Swift" , 	"4. Maruti Baleno" 
, "5. Maruti Dzire", "6. Honda City 4th Generation", "7. Honda City", "8. Hyundai Verna	", 
"9. Kia Sonet", "10. Kia Seltos", "11. Mahindra Thar", "12. Hyundai Creta	", "13.	Maruti Ertiga	" 
, "14.	Toyota Innova Crysta", "15.	Renault Triber" , "16. Maruti XL6"];

var h = 0;
var a = "";

var car = document.getElementById("listofcars");
car.onclick=(evt)=>{
  if (h<carList.length){
    a+=carList[h++]+"<br>";
  }
  document.getElementById("Carlists").innerHTML = a;
}


var last = document.getElementById("last");

last.onclick=(evt)=>{
  location.href = "#contact";
}