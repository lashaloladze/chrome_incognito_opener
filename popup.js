document.addEventListener('DOMContentLoaded', function(){
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
      let url = tabs[0].url;
      chrome.windows.create({"url": url, "incognito": true
    });});
  }, false);
}, false)