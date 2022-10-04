const years = document.querySelector("#years");
const days = document.querySelector("#days");
const months = document.querySelector("#months");

const age = document.querySelector("#desc");
const dob = document.querySelector("input");

function getAge(){
    const givenDate = new Date(dob.value);
    const curDate = new Date();
    const dateObj = {
        userDate : {
            year : givenDate.getFullYear(),
            month : givenDate.getMonth() + 1,
            day : givenDate.getDate()
        },
        date : {
            year : curDate.getFullYear(),
            month : curDate.getMonth() + 1,
            day : curDate.getDate()
        }
    }
    return dateObj;
}

function calcAge(){ 
    const str = getAge();
    const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(str.userDate.day > str.date.day) {
        str.date.day = str.date.day + months[str.date.month - 1];
        str.date.month = str.date.month - 1
    }

    if(str.userDate.month > str.date.month) {
        str.date.year = str.date.year - 1;
        str.date.month = str.date.month + 12;
    }
    
    const res = {
        year: str.date.year - str.userDate.year,
        month: str.date.month - str.userDate.month,
        day: str.date.day - str.userDate.day
    }

    return res;
}

function displayAge(){
    const res = calcAge();
    years.textContent = res.year;
    months.textContent = res.month;
    days.textContent = res.day;
    
}

dob.addEventListener("input", () => {
    displayAge();
})

