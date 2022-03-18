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


const homeUrl = "http://localhost:8080/devops_starter_war_exploded/api/user/";

function getFromApi(path,htmlId,isList){

  const url = homeUrl + path;

  if(isList){

    fetch(url)
      .then(res => res.json())
      .then(data => {

        data.forEach(element => {

          document.querySelector(htmlId).innerHTML += "<li>" + element.firstName + "</li>"
          
        });

      })

  } else {

    fetch(url)
      .then(res => res.json())
      .then(data => {

        document.querySelector(htmlId).innerHTML += "<li>" + data.firstName + "</li>"

      })

  }
  
}





// All persons
getFromApi("all","#allPersons",true);


// All persons given a hobby
getFromApi("hobby/Card game","#hobbyPersons",true);


// Person by ID
getFromApi("3","#personById",false);


// Person given phone
getFromApi("phone/54853846","#phonePerson",false);



// Person count by hobby
const url6 = "http://localhost:8080/devops_starter_war_exploded/api/user/hobby/count/Parkour";
fetch(url6)
.then(res => res.json())
.then(data => {
  
  document.querySelector("#count").innerHTML = "Amount: " + data.count;

})

// All persons given a zip
getFromApi("zipcode/2000", "#zipPerson",true);



// All zips
const url8 = "http://localhost:8080/devops_starter_war_exploded/api/user/zipcode/all";
fetch(url8)
.then(res => res.json())
.then(data => {
  data.forEach(element => {
    document.querySelector("#allZips").innerHTML += "<li>" + element + "</li>"
  });
})



// Create person
document.querySelector("#submitCreatePerson").addEventListener('click', (ev) => {

  fetch(homeUrl, {
      method: "POST",

      body: JSON.stringify({
          email: document.querySelector("#createEmail").value,
          firstName: document.querySelector("#createFirstname").value,
          lastName: document.querySelector("#createLastname").value,
      }),
      
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  document.querySelector("#createPara").innerHTML = "SUBMITTED";
})



// Edit person
document.querySelector("#submitEditPerson").addEventListener('click', (ev) => {

  fetch(homeUrl + document.querySelector("#editId").value, {
      method: "PUT",

      body: JSON.stringify({
          id: document.querySelector("#editId").value,
          email: document.querySelector("#editEmail").value,
          firstName: document.querySelector("#editFirstname").value,
          lastName: document.querySelector("#editLastname").value,
      }),
      
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })

  document.querySelector("#editPara").innerHTML = "SUBMITTED";
})


// Delete person
document.querySelector("#submitDeletePerson").addEventListener('click', (ev) => {

  fetch(homeUrl + document.querySelector("#deleteId").value, {
    method: 'DELETE',
  })

  document.querySelector("#deletePara").innerHTML = "DELETED";

})





function hideAllShowOne(idToShow)
{
  document.getElementById("about_html").style = "display:none"
  document.getElementById("allPersons_html").style = "display:none"
  document.getElementById("allByHobby_html").style = "display:none"
  document.getElementById("byId_html").style = "display:none"
  document.getElementById("byPhone_html").style = "display:none"
  document.getElementById("countByHobby_html").style = "display:none"
  document.getElementById("byZip_html").style = "display:none"
  document.getElementById("allZipCodes_html").style = "display:none"
  document.getElementById("createPerson_html").style = "display:none"
  document.getElementById("editPerson_html").style = "display:none"
  document.getElementById("deletePerson_html").style = "display:none"
  document.getElementById(idToShow).style = "display:block"
}

function menuItemClicked(evt)
{
  const id = evt.target.id;
  switch (id)
  {
    case "all": hideAllShowOne("allPersons_html"); break
    case "allByHobby": hideAllShowOne("allByHobby_html"); break
    case "byId": hideAllShowOne("byId_html"); break
    case "byPhone": hideAllShowOne("byPhone_html"); break
    case "countByHobby": hideAllShowOne("countByHobby_html"); break
    case "byZip": hideAllShowOne("byZip_html"); break
    case "allZipCodes": hideAllShowOne("allZipCodes_html"); break
    case "createPerson": hideAllShowOne("createPerson_html"); break
    case "editPerson": hideAllShowOne("editPerson_html"); break
    case "deletePerson": hideAllShowOne("deletePerson_html"); break
    default: hideAllShowOne("about_html"); break
  }
  evt.preventDefault();
}
document.getElementById("menu").onclick = menuItemClicked;
hideAllShowOne("about_html");



