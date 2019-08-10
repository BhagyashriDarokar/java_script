//program 1
/*var numberOfsecondsInminute = 60;
var numberOfMinutesInHour = 60;
var numberOfHoursInDays = 24;
var numberOfDaysInWeek  = 7;
var numberOfDaysInMonth = 31;
var numberOfDaysInYear = 365;
var numberOfWeeksInYears = 52;
var secondsPerDay =  numberOfsecondsInminute * numberOfMinutesInHour * numberOfHoursInDays;
document.write('there are '+secondsPerDay+' second in a day');
*/

//program 2
//prompt() return the string variable

/*var htmlBadges = prompt("please enter the htmlBadges you have received");
var cssBadges = prompt("please enter the cssBadges you have received");
var totalBadges = htmlBadges + cssBadges;
document.write("there are total" + totalBagdes + "you had got");
*/

//program 3
//using parseInt()to convert string to integer and correcting the program

/*var htmlBadges = prompt("please enter the htmlBadges you have received");
var cssBadges = prompt("please enter the cssBadges you have received");
var totalBadges = parseInt(htmlBadges) + parseInt(cssBadges);
document.write("there are total" + totalBadges + "you had got it");
*/

//program 4
/*var lower = parseInt(prompt("please enter a first value"));
var upper = parseInt(prompt("please enter a last value"));
var randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
alert(" you have rolled the number" + randomNumber);
*/


//program 5
/*var answer = prompt('what programming language which is name snake');
if(answer.toUpperCase()==='PYTHON')
{
	document.write("that is right");
}
else
{
	document.write("that is wrong");
}*/
var lower = parseInt(prompt("please enter the start no");
var upper = parseInt(prompt("please enter the end no");
var randomNumber =  Math.floor(Math.random() * (upper - lower + 1)) + lower;
alert ("you have rolled number" + randomNumber);
