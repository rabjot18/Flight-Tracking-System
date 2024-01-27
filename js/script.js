/* 
 * Main scripts file for the flight schedule website.
 * Assignment 4, CSCI 1170, Fall 2022
 * Starter code provided by Dr. Mayra Barrera Machuca
 */



/* Making an element called main using query Selector */
let main = document.querySelector(".container")

   
    


    


/* using for loop here*/
for (let i = 0;i < FlightInfo.length;i++)
 {

 let sect = document.createElement("section")
 
 
 //creating the elements 
 let title =document.createElement("h2")
 let subhed1 = document.createElement("h6")
 let subhed2=document.createElement("h6")
 let p1=document.createElement("p")
 let p2=document.createElement("p")
let p3 =document.createElement("p")
 let p4 =document.createElement("p")
 let h=document.createElement("p")
 let t = document.createElement("p")
 let button =document.createElement("button")


 
title.innerHTML += FlightInfo[i].destination
button.innerHTML = "Submit"

if (FlightInfo[i].stops==0) {
    subhed2.innerHTML += "Non-stop"+","+FlightInfo[i].time+"min"+"<br>"+"DepartTime: " +FlightInfo[i].departTime

  } else { 
    subhed2.innerHTML += FlightInfo[i].stops+","+FlightInfo[i].time+"min"+"<br>"+"DepartTime: " +FlightInfo[i].departTime

  }
 
 subhed2.innerHTML += "Total stops "+FlightInfo[i].stops+","+FlightInfo[i].time+"min"+"<br>"+"DepartTime: " +FlightInfo[i].departTime

 


 p4.innerHTML += "Airline:"+FlightInfo[i].airline+"<br>"+"Airport: " + FlightInfo[i].airport +"<br>"+ "Details: " +  FlightInfo[i].info







 /*appending content into main  */
 sect.appendChild(title)
 sect.appendChild(subhed1)
 sect.appendChild(subhed2)
 sect.appendChild(p1)
 sect.appendChild(p2)
 sect.appendChild(p3)
 sect.appendChild(p4)
 sect.appendChild(h)
 sect.appendChild(t)
 sect.appendChild(button)

 // set attribute used from w3c schools https://www.w3schools.com/js/js_htmldom_eventlistener.asp
 sect.setAttribute("class","blueCont")
 
 main.appendChild(sect)
 
 button.setAttribute("class","button");
 
 }
 
 let k =document.querySelectorAll("button")
 for(let j=0; k.length>j; j++){

    /* adding the event listner */
// ideas used from w3c schools url https://www.w3schools.com/js/js_htmldom_eventlistener.asp
 k[j].addEventListener("click",function(){show(FlightInfo[j])} )
 

}
function show(classInfo){
    let p5= document.createElement("p")

    p5.innerHTML += "Flight "+classInfo.code + " to " + classInfo.destination+" added"
 

    let aside1= document.querySelector(".flights-selection-bag")
    aside1.appendChild(p5)
   
}
 
 
 
 

 
 




