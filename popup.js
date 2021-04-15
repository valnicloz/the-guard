// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//'use strict';
//
//let changeColor = document.getElementById('changeColor');
//chrome.storage.sync.get('color', function(data) {
//  changeColor.style.backgroundColor = data.color;
//  changeColor.setAttribute('value', data.color);
//    
//    });
//    
//changeColor.onclick = function(element) {
//    let color = element.target.value;
//    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//      chrome.tabs.executeScript(
//          tabs[0].id,
//          {code: 'document.body.style.backgroundColor = "' + color + '";'});
//    });
//  };
//
//// When the button is clicked, inject setPageBackgroundColor into current page
//changeColor.addEventListener("click", async () => {
//  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//
//  chrome.scripting.executeScript({
//    target: { tabId: tab.id },
//    function: setPageBackgroundColor,
//  });
//});
//
//// The body of this function will be executed as a content script inside the
//// current page
//function setPageBackgroundColor() {
//  chrome.storage.sync.get("color", ({ color }) => {
//    document.body.style.backgroundColor = color;
//  });
//}



//});

//eye 
const container = document.querySelector('.container');
document.addEventListener('mousemove', e => {
  const eyes = document.querySelectorAll('.eye');
  [].forEach.call(eyes, function(eye) {
    // Get the mouse position on the horizontal axis
    let mouseX = eye.getBoundingClientRect().right;
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
