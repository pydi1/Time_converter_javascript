let hoursInput1 = document.getElementById("hoursInput");
let minutesInput1 = document.getElementById("minutesInput");
let convertBtn1 = document.getElementById("convertBtn");
let timeInSeconds1 = document.getElementById("timeInSeconds");
let errorMsg1 = document.getElementById("errorMsg");

convertBtn1.onclick = function() {
    let hours = parseInt(hoursInput1.value);
    let minutes = parseInt(minutesInput1.value);
    console.log(hours);
    console.log(minutes);
    if (hoursInput1.value === "" && minutesInput1.value === "") {
        errorMsg1.textContent = "please enter a valid number of hours && minutes";
    } else if (hoursInput1.value === "" && minutesInput1.value !== "") {
        errorMsg1.textContent = "please enter a valid number of hours";
    } else if (minutesInput1.value === "" && hoursInput1.value !== "") {
        errorMsg1.textContent = "please enter a valid number of minutes";
    }


};
convertBtn1.addEventListener("click", function() {


    let hours = parseInt(hoursInput1.value);
    let minutes = parseInt(minutesInput1.value);
    console.log(hours);
    console.log(minutes);

    let timeInSeconds2 = hours * 3600 + minutes * 60;
    timeInSeconds1.classList.remove("d-none");
    timeInSeconds1.textContent = timeInSeconds2 + "s";

});