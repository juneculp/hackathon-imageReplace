let changeImage = document.getElementById("changeImage");
console.log(changeImage);

// let newButton = document.createElement('button');
//let newButton = document.getElementById('changeImage');
// newButton.textContent = 'PRESS MEEEEEEE';
// newButton.type = "button";
// let imgNum = 0;
// let div = document.getElementsByTagName('div');
// div[0].prepend(newButton);


//let changeImage = document.querySelector("#changeImage");
console.log(document);
changeImage.addEventListener("click", async () => {
    console.log('hello')
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageImages
      });
    
},false);
function setPageImages(){
    let filenames2 = [
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
    let imgs = document.getElementsByTagName('img');
    console.log(imgs);
    for(let i = 0; i < filenames2.length; i++){
        let file = "images/" + filenames2[i];
        let url = chrome.runtime.getURL(file);
        filenames2[i] = url;
    }
        
    for (imgElt of imgs) {
        let r = Math.floor(Math.random() * filenames2.length);
        imgElt.src = filenames2[r];
        console.log(imgElt.src);
}
}
  
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: setPageImages
    // });
    // chrome.scripting.executeScript({
    //   target: { tabId: tab.id },
    //   function: setPageBackgroundImage
    // });




