
var correctanswer =0;
var answer1 = prompt("enter the name of language which is also the name of snake");
if(answer1.toUpperCase()=== "PYTHON")
{
correctanswer += 1;
}
var answer2 = prompt("enter the name of language which is also the name of gem");
if(answer2.toUpperCase() === "RUBY")
{
correctanswer +=1;
}
var answer3 = prompt("enter the name of language which is also the name of structure");
if(answer3.toUpperCase() === "HTML")
{
correctanswer +=1;
}
var answer4 = prompt("enter the name of language which is also the name of styling");
if(answer4.toUpperCase() === "CSS")
{
correctanswer += 1;
}
var answer5 = prompt("enter the name of language which is also the name of interactive");
if(answer5.toUpperCase() === "JAVASCRIPT")
{
correctanswer += 1;
}
if(correctanswer === 5)
{
document.write("it is gold");
}
else if(correctanswer >= 3)
{
document.write("it is silver");
}
else if(correctanswer >= 1)
{
	document.write("it is bronze");
}
else
{
document.write("try it again");
}