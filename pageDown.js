var age = prompt("please enter your age: ");
var name = "hay daniel, your are " + age + " old";
alert(name);

function person() {

    name = prompt("הזן את שמך");
    age = prompt("הזן את גילך");
    id = prompt("הכנס ת.ז");
    return document.write(name + " אתה בן " + age + " בעל ת.ז" + id);
}
// person();

function difColor() {
  
    var colorElement = document.getElementById("color");
    var color = colorElement.value;
    colorElement.style.color = color;
    var reqElement= document.getElementById("req");
    reqElement.style.color=color;
}