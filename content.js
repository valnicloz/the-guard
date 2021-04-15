//creating an element that is a div- limbo
let container = document.createElement("div")
//eventually want to put eye here
//just html w/o spaces... within a string
let extraEye = document.getElementById("iris");
if(extraEye){
   extraEye.parentNode.removeChild(extraEye);
}
container.innerHTML = "<div id='iris2'></div><div id='iris' class='realeye'><div id='eyeball' class='eye eye-left'><div class='eye-inner'></div></div></div>"
//giving a class with a name
container.classList.add("cool-container");
//putting inside the body of page- what appendChild means
document.body.appendChild(container);
//selecting made eye
let eyeball= document.getElementById('iris2');
let eyeimage = document.createElement('img')
eyeimage.src=chrome.runtime.getURL('images/eye_sans-01.png')
//eyeball.appendChild(eyeimage)
console.log(chrome.runtime.getURL('images/eye_sans-01.png'))
//eyeball.style.backgroundColor='black'

eyeball.style.backgroundImage= 'url("'+ chrome.runtime.getURL('images/eye_sans-01.png')+'")';

//about getting the eye to follow the mouse
document.addEventListener('mousemove', e => {
  const eyes = document.querySelectorAll('#iris');
  [].forEach.call(eyes, function(eye) {
    // Get the mouse position on the horizontal axis
    let mouseX = eye.getBoundingClientRect().left;
    // If it's the left eye we need the left offset instead the right
    if (eye.classList.contains('eye-left')) {
      mouseX = eye.getBoundingClientRect().left;
    }
    // Now we also need the vertical offset
    let mouseY = eye.getBoundingClientRect().top;
    // Now we are going to calculate the radian value of the offset between the mouse and the eye
    let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
    // Let's convert this into a degree based value so we can use it in CSS
    let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
    // Now all we have to do is add this degrees to our eye!
    eye.style.transform = `rotate(${rotationDegrees}deg)`;
  });
});

//cookies on current page
let cookies= document.cookie
 console.log(cookies.split(';').length) 


//speech bubble here
let bubble = document.createElement("div")
bubble.innerHTML ="<p> There are "+cookies.split(';').length+" cookie(s) on this site. You do realize that by accepting cookies you’re giving all your information. Why did you accept them so easily? </p>"
bubble.classList.add("bubble");
document.body.appendChild(bubble);

if (Math.random()>0.5){ 
    bubble.classList.add("show");
}
else{
    bubble.classList.remove("show");
}



