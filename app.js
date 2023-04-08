

//  var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
//  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j]);
//  }
//  }

// var cityToCheck = prompt("Enter your city");
// cityToCheck = cityToCheck.toLowerCase();
// var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
// for (var i = 0; i <= 4; i++) {
// if (cityToCheck === cleanestCities[i]) {
// alert("It's one of the cleanest cities");
// }
// }

// var firstChar = cityToCheck.slice(0, 1);
// var otherChars = cityToCheck.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var cappedCity = firstChar + otherChars;

// var month = prompt("Enter a month");
// var charsInMonth = month.length;
// if (charsInMonth > 3) {
// monthAbbrev = month.slice(0, 3);
// }

// var str = prompt("Enter some text");
// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 2) === " ") {
// alert("No double spaces!");
// break;
//  }

// for (var i = 0; i < text.length; i++) {
//      if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//      }

// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
// text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// for (var i = 0; i < text.length; i++) {
//      if (text.charAt(i) === "!") {
//      alert("Exclamation point found!");
//      break;
//      }
//      }

// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//  }

// text = text.replace("World War II", "the Second World War");

// var newText = text.replace(/World War II/g, "the Second World War");

// var scoreAvg = Math.round(.0678437);
// var scoreAvg = Math.ceil(.000001);
// var scoreAvg = Math.floor(.999999);

// var randomNumber = Math.random();

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = currentAge + 1;


// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;

// var myFractional = parseFloat("1.9999");

// var integerString = "24"
// var num = Number(integerString);

// var numberAsNumber = 1234;
// var numberAsString = numberAsNumber.toString();

// var prettyTotal = total.toFixed(2);

// var str = num.toString();
// if (str.charAt(str.length - 1) === "5") {
// str = str.slice(0, str.length - 1) + "6";
// }
// num = Number(str);
// prettyNum = num.toFixed(2);

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// var d = new Date();
// var currentMonth = d.getMonth();

// var dayOfMonth = d.getDate();

// var currYr = d.getFullYear();

// var currentHrs = d.getHours();

// var currMins = d.getMinutes();

// var currSecs = d.getSeconds()

// var currMills = d.getMilliseconds();

// var millsSince = d.getTime();

// var today = new Date();
// var doomsday = new Date("June 30, 2035");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msDoomsday - msToday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// dDiff = Math.floor(dDiff);

// var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
// var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));

//  var d = new Date();
//  d.setFullYear(2001);

// var d = new Date();
// d.setMonth(11);

// var d = new Date();
// d.setHours(13);

// var d = new Date();
// d.setMinutes(05);

// var d = new Date();
// d.setSeconds(55);

// var d = new Date();
// d.setMilliseconds(867);

//  var now = new Date();
//  var theHr = now.getHours();
//  var theMin = now.getMinutes();
//  alert("time: " + theHr + ":" + theMin);

// function tellTime() {
//     var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//  alert("Current time: "+ theHr + ":" + theMin);
//      }

// function greetUser() {
//      alert("Hello, there.");
//      }

// greetUser("Hello, there.");

//  var greeting = "Hello, there."
//  greetUser(greeting);

//  function showMessage(m, string, num);
//  alert(m + string + num);
//  }

// var month = "March";
//  showMessage(month, "'s winner number is ", 23);

// var orderTot;
//  if (merchTot >= 100) {
//  orderTot = merchTot;
//  }
//  else if (merchTot < 50.01) {
//  orderTot = merchTot + 5;
//  }
//  else {
//  orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//   }

// function calcTot(merchTot) {
//      var orderTot;
//      if (merchTot >= 100) {
//      orderTot = merchTot;
//      }
//      else if (merchTot < 50.01) {
//      orderTot = merchTot + 5;
//      }
//      else {
//      orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//      }
//      return orderTot;
//     }


// var theSum
//  addNumbers();

//  function addNumbers() {
//     theSum = 2 + 2;
//      }

// var theSum = addNumbers();
// function addNumbers() {
//     var theSum = 2 + 2;
//     return theSum;
//     }