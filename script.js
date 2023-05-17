const
    // labels 
    dayLabel = document.getElementById("ddLabel"),
    monthLabel = document.getElementById("mmLabel"),
    yearLabel = document.getElementById("yyyyLabel"),

    //  Error labels
    dayErr = document.querySelector("#ddErr"),
    monthErr = document.querySelector("#mmErr"),
    yearErr = document.querySelector("#yyyyErr"),

    // inputs
    dayInput = document.querySelector("#dayInput"),
    monthInput = document.querySelector("#monthInput"),
    yearInput = document.querySelector("#yearInput"),

    // outputs
    dayOutput = document.querySelector("#day"),
    monthOutput = document.querySelector("#month"),
    yearOutput = document.querySelector("#year"),

    // others
    actionBtn = document.querySelector("#actionBtn");

let
    today = new Date(),
    birthday,
    dayVal,
    monthVal,
    yearVal;

function addAnim(input) {
    if (input.classList.contains("animClass")) {
        input.classList.add("animClass");
    }
}

function resetAnim(input) {
    if (input.classList.contains("animClass")) {
        input.classList.remove("animClass");
        // dayInput.classList.remove("inputErr");

    }
}

function dayValidator() {
    if (dayInput.value <= 0 || dayInput.value > 31) {
        dayInput.classList.add("inputErr");
        dayLabel.classList.add("labelErr");
        dayErr.innerHTML = "Must be a valid day";

    } else {
        dayInput.classList.remove("inputErr");
        dayLabel.classList.remove("labelErr");
        dayErr.innerHTML = "";
    }
}
dayInput.addEventListener("focusout", dayValidator);


function monthValidator() {
    if (monthInput.value <= 0 || monthInput.value > 12) {
        monthInput.classList.add("inputErr");
        monthLabel.classList.add("labelErr");
        monthErr.innerHTML = "Must be a valid month";

    } else {
        monthInput.classList.remove("inputErr");
        monthLabel.classList.remove("labelErr");
        monthErr.innerHTML = "";
    }
}
monthInput.addEventListener("focusout", monthValidator);



function yearValidator() {
    if (yearInput.value > today.getFullYear()) {
        yearInput.classList.add("inputErr");
        yearLabel.classList.add("labelErr");
        yearErr.innerHTML = "Must be in the past";
    } else if (yearInput.value.length != 4) {
        yearInput.classList.add("inputErr");
        yearLabel.classList.add("labelErr");
        yearErr.innerHTML = "Must be a valid year";
    } else {
        yearInput.classList.remove("inputErr");
        yearLabel.classList.remove("labelErr");
        year = yearInput.value; ``;
        // console.log(year);
        yearErr.innerHTML = "";
    }
}
yearInput.addEventListener("focusout", yearValidator);


function evaluateOutput() {
    dayVal = dayInput.value;
    monthVal = monthInput.value;
    yearVal = yearInput.value;
    birthday = new Date(`${yearVal}-${monthVal}-${dayVal}`);
    console.log(dayVal, monthVal, yearVal);

    if (yearInput.value == "" ||
    monthInput.value == "" ||
    yearInput.value > today.getFullYear() ||
    birthday.getDate() != dayVal){

    }
    if (birthday.getFullYear() != yearVal ||
        (birthday.getMonth() + 1) != Number(monthVal) ||
        yearInput.value > today.getFullYear() ||
        birthday.getDate() != dayVal) {
        monthInput.classList.add("inputErr");
            
            monthLabel.classList.add("labelErr");
        monthErr.innerHTML = "";
        yearErr.innerHTML = "";

        dayErr.classList.add("animClass");
        dayErr.innerHTML = "Must be a valid date";
    } else {
        let age = today.getTime() - birthday.getTime();
        age = age / (1000 * 3600 * 24); // convert diff to days

        let years = Math.floor(age / 365.2425),
            months = Math.floor((age % 365.2425) / 30),
            days = Math.floor((age % 365.2425) % 30);

        yearOutput.innerHTML = years;
        monthOutput.innerHTML = months;
        dayOutput.innerHTML = days;
    }
}

// reset animation;
actionBtn.addEventListener("mouseout", () => { dayErr.classList.remove("animClass"); });

actionBtn.addEventListener("click", evaluateOutput);
