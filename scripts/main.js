var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/odl-logo.png') {
        myImage.setAttribute('src','images/odl-logo2.png');
    }
    else {
        myImage.setAttribute('src','images/odl-logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'ODL welcomes you, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back to ODL, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}