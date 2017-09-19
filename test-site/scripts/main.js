// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gutaku-board2.jpg') {
 myImage.setAttribute ('src','images/gutaku-board.jpg');
    } else {
      myImage.setAttribute ('src','Images/gutaku-board2.jpg');
    }
}

// Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Gutaku Puzzle Board, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();    
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Gutaku Puzzle Board, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
