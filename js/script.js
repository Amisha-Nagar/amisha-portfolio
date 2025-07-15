
// Navigation Bar 
const toggleBtn = document.querySelector('.menu');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open');
  const isOpen = dropDownMenu.classList.contains('open');
  toggleBtnIcon.classList.toggle('fa-bars', !isOpen);
  toggleBtnIcon.classList.toggle('fa-xmark', isOpen);
};

// Typewriter effect 
var aText = new Array(
"Hi, I’m Amisha - UX designer and design system specialist."
);
var iSpeed = 44; 
var iIndex = 0; 
var iArrLength = aText[0].length; 
var iScrollAt = 20; 
 
var iTextPos = 0; 
var sContents = ''; 
var iRow; 


function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}

typewriter();