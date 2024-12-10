var bulb = document.querySelector(".bulb"); // use class or id selector, "bulb" should be ".bulb" if it's a class
var bttn = document.querySelector(".bttn");

var flag = 0;

bttn.addEventListener("click", function() {
    if (flag == 0) {
        // Set the radial gradient background
        bulb.style.boxShadow = "0 0 20px 20px rgba(255, 255, 102, 0.8)";
        bulb.style.background = "radial-gradient(rgb(255, 247, 247), yellow)";
        flag = 1;
    } else {
        // Reset the background to whatever the default is
        bulb.style.background = ""; 
        bulb.style.boxShadow = "";
        flag = 0;
    }
});
