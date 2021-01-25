const buttonIOS = document.getElementById("button__ios1");
const buttonMac = document.getElementById("button__mac1");
const clipboard = document.getElementById("clipboard1");
const clipboard_title=document.getElementById("clipboard__title1");
const clipboard_content=document.getElementById("clipboard__content1");
buttonIOS.addEventListener("mousemove",function(){
  clipboard.style.background = "black";
  buttonIOS.style.color="black";
  buttonIOS.style.background="white";
  clipboard.style.transition ="all 0.5s linear";
  clipboard_content.style.color="white";
  clipboard_title.style.color="white";
});
buttonMac.addEventListener("mousemove",function(){
    clipboard.style.background = "black";
    buttonMac.style.color="black";
    buttonMac.style.background="white";
    clipboard.style.transition ="all 0.5s linear";
    clipboard_content.style.color="white";
  clipboard_title.style.color="white";
  });
  buttonIOS.addEventListener("mouseleave",function(){
    clipboard.style.background = "white";
    buttonIOS.style.color="white";
    buttonIOS.style.background="hsl(171, 66%, 44%)";
    clipboard.style.transition ="all 0.5s linear";
    clipboard_content.style.color="hsl(201, 11%, 66%)";
  clipboard_title.style.color="rgb(74,82,90)";
  });
  buttonMac.addEventListener("mouseleave",function(){
      clipboard.style.background = "white";
      buttonMac.style.color="white";
      buttonMac.style.background="hsl(233, 100%, 69%)";
      clipboard.style.transition ="all 0.5s linear";
      clipboard_content.style.color="hsl(201, 11%, 66%)";
  clipboard_title.style.color="rgb(74,82,90)";
    });