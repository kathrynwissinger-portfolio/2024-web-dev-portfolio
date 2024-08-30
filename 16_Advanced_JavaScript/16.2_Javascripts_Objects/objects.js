//creating objects
var bellBoy1Name = "Timmy"
var bellBoyAge = 19;
var bellBoy1HasWorkPermit = true;
var bellBoy1Languages = [
    "French",
    "English"
]

//
var bellBoy1  = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"]
}

//constructor function 
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages =languages;
}

//intialise object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);

//housekeeper constructor
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire
}

//new object function
var housekeeper1 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(housekeeper1.name);