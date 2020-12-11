console.log("Screen locking system");



// select elements

const pBtn = document.querySelectorAll(".p-btn");
const uBtn = document.querySelectorAll(".u-btn");
const srBtn = document.querySelector("#set-r-digit");
const orBtn = document.querySelector("#open-r-digit");
const lockBtn = document.querySelector("#lock-btn");
const goBtn = document.querySelector("#go-btn");

const setLock = document.querySelector("#set-lock");
const setScreen = document.querySelector("#set-screen");
const openLock = document.querySelector("#open-lock");
const openScreen = document.querySelector("#open-screen");
const unlocked = document.querySelector("#unlocked");

let passcode = [];

for (btn of pBtn) {
    btn.addEventListener("click", (e) => {
        let bTxt = e.target.innerText;
        passcode.push(bTxt);
        setScreen.value = passcode.join("");
        localStorage.setItem("password", passcode.join(""));
    })
}

srBtn.addEventListener("click", () => {
    passcode.pop();
    localStorage.setItem("password", passcode.join(""));
    setScreen.value = passcode.join("");
})


lockBtn.addEventListener("click", () => {
    // passcode array is our password
    if (setScreen.value == "") {
        return alert("Enter the password you want to setup")
    } else {
        setLock.style.display = "none";
        openLock.style.display = "flex";
    }
})




let passcode2 = [];


for (btns of uBtn) {
    btns.addEventListener("click", (el) => {
        let btnTxt = el.target.innerText;
        passcode2.push(btnTxt);
        openScreen.value = passcode2.join("");
        // localStorage.setItem("password", passcode.join(""));
    })
}



orBtn.addEventListener("click", () => {
    passcode2.pop();
    // localStorage.setItem("password", passcode.join(""));
    openScreen.value = passcode2.join("");
})

goBtn.addEventListener("click", () => {
    // console.log(localStorage.getItem("password"));
    if (openScreen.value == localStorage.getItem("password")) {
        // console.log("hello");
        openLock.style.display = "none";
        unlocked.style.display = "flex";
    }
    else {
        return alert("Wrong password")
    }
})


function checkAvail() {
    if (localStorage.getItem("password") != null || localStorage.getItem("password") != undefined) {
        setLock.style.display = "none";
        openLock.style.display = "flex";
    }
    else {
        setLock.style.display = "flex";
    }
}

let setNewPassword = document.getElementById("new-lock-btn");

window.onload = checkAvail();

setNewPassword.addEventListener("click", () => {
    setLock.style.display = "flex";
    openLock.style.display = "none";
    unlocked.style.display = "none";
})


let lockScreenbtn = document.getElementById("lock");

lockScreenbtn.addEventListener("click" , () => {
    setLock.style.display = "none";
    openLock.style.display = "flex";
    unlocked.style.display = "none";
    openScreen.value = "";
    passcode2 = [];
})