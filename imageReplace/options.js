let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];
let filenames3 = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
    "11..png",
    "12.png",
    "13..png",
    "14.png",
    "15.png",
    "16.png",
    "17.png",
    "18.png",
    "19.png",
    "20.png",
    "21.png",
    "22.png",
    "23.png",
    "24.png",
    "25.png",
    "26.png",
    "27.png",
    "28.png",
    "29.png",
    "30.png",
    "31.png",
    "32.png",
    "33.png",
    "34.png",
    "35.png",
    "36.png",
    "37.png",
    "38.png",
    "39.png",
    "40.png",
    "41.png",
    "42.png",
    "43.png"
];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}
//https://googledrive.com/host/1ewELCQwq-4-Btke4AaUcXS2Mrw9pVpE3/41.png
// Add a button to the page for each supplied color
function constructOptions(filenames) {
  chrome.storage.sync.get("color", (data) => {
    //let currentColor = data.color;
    
    // For each color we were provided…
    for(let i = 0; i < filenames.length;i++){
        let button = document.createElement("button");
        let file = "/images/" + filenames[i];
        let url = chrome.runtime.getURL(file);
        console.log(url)
        button.style.backgroundImage = `url(${file})`;
        //console.log(button.backgroundImage,button.dataset.backgroundImage);
        button.addEventListener("click", handleButtonClick);
        page.appendChild(button);
        //let imgs = document.getElementsByTagName('img');
        //console.log(imgs);
    }
    // for (let buttonColor of buttonColors) {
    //   // …create a button with that color…
    //   let button = document.createElement("button");
    //   //button.dataset.color = buttonColor;
    //   //button.style.backgroundColor = buttonColor;
      
    //   // …mark the currently selected color…
    //   if (buttonColor === currentColor) {
    //     button.classList.add(selectedClassName);
    //   }

    //   // …and register a listener for when that button is clicked
    //   button.addEventListener("click", handleButtonClick);
    //   page.appendChild(button);
    // }
  });
}

// Initialize the page by constructing the color options
constructOptions(filenames3);