import React from 'react';

function myFunction() {
  console.log('hey')
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

export default myFunction;