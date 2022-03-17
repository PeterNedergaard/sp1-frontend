import "./style.css"
import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap';
import '@popperjs/core';
import "./jokeFacade"
import jokeFacade from "./jokeFacade"

document.getElementById("all-content").style.display = "block"

/* 
  Add your JavaScript for all exercises Below or in separate js-files, which you must the import above
*/

/* JS For Exercise-1 below */


/* JS For Exercise-2 below */



/* JS For Exercise-3 below */


/* 
Do NOT focus on the code below, UNLESS you want to use this code for something different than
the Period2-week2-day3 Exercises
*/



// All persons
const url1 = "http://localhost:8080/devops_starter_war_exploded/api/user/all";
fetch(url1)
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    document.querySelector("#allPersons").innerHTML += "<li>" + element.firstName + "</li>"
  });
})


// All persons
const url2 = "http://localhost:8080/devops_starter_war_exploded/api/user/3";
fetch(url2)
.then(res => res.json())
.then(data => {
  
  document.querySelector("#personById").innerHTML += "<li>" + data.firstName + "</li>"

})


// All persons given a hobby
const url4 = "http://localhost:8080/devops_starter_war_exploded/api/user/hobby/Parkour";
fetch(url4)
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    document.querySelector("#hobbyPersons").innerHTML += "<li>" + element.firstName + "</li>"
  });
})


// Person given phone
const url5 = "http://localhost:8080/devops_starter_war_exploded/api/user/phone/54853846";
fetch(url5)
.then(res => res.json())
.then(data => {
  
  document.querySelector("#phonePerson").innerHTML = "<li>" + data.firstName + "</li>"

})

// Person count by hobby
const url6 = "http://localhost:8080/devops_starter_war_exploded/api/user/hobby/count/Parkour";
fetch(url6)
.then(res => res.json())
.then(data => {
  
  document.querySelector("#count").innerHTML = "Amount: " + data.count;

})

// All persons given a zip
const url7 = "http://localhost:8080/devops_starter_war_exploded/api/user/zipcode/2791";
fetch(url7)
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    document.querySelector("#zipPerson").innerHTML += "<li>" + element.firstName + "</li>"
  });
})

// All zips
const url8 = "http://localhost:8080/devops_starter_war_exploded/api/user/zipcode/all";
fetch(url8)
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    document.querySelector("#allZips").innerHTML += "<li>" + element + "</li>"
  });
})






function hideAllShowOne(idToShow)
{
  document.getElementById("about_html").style = "display:none"
  document.getElementById("ex1_html").style = "display:none"
  document.getElementById("ex2_html").style = "display:none"
  document.getElementById("ex3_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt)
{
  const id = evt.target.id;
  switch (id)
  {
    case "ex1": hideAllShowOne("ex1_html"); break
    case "ex2": hideAllShowOne("ex2_html"); break
    case "ex3": hideAllShowOne("ex3_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



