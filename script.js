var name ="Peggy";
var age = 20;
var isgirl = true;
var fruits = ["apple", "banana", "coconut"];
alert(name);
alert(age);
alert(isgirl);
alert(fruits[0]);
alert(fruits[2]);

function addition(num){
 	return num+10;
}
var age = 20;
var trueage = addition(age);
alert(trueage);
var age2 = 30;
var trueage2 = addition(age2);
alert(trueage2);

function test(){
	a=123;
	var b=456;
	if(a==123) 
		var c=789;
}
document.getElementById("byid").innerHTML="我來自id";
document.getElementById("byid").style.color="blue";

document.getElementsByClassName("byclass")[0].innerHTML="我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize="30px";

document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML="helloworld";
document.getElementsByTagName("p")[0].style.color="red";
document.getElementsByTagName("p")[0].style.fontSize="30px";