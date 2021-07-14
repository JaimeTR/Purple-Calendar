// ELEMENTS
const monthOptionsContainer = document.getElementById("select-month");
const monthContainer = document.getElementById("month");
const monthYearContainer = document.getElementById("month-year");
const leftButtonElement = document.getElementById("left-button");
const rightButtonElement = document.getElementById("right-button");

// CONSTANTS
const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDaysNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthDaysNumbers = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// VARIABLES
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let isLeap = year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;
if (isLeap) {
	monthDaysNumbers[1] = 29;
}

// Add months options
let monthOptions = "";
for (let i = 0; i < 12; i++) {
	monthOptions += `<option>${monthsNames[i]}</option>`;
}
monthOptionsContainer.innerHTML = monthOptions;

// Set calendar settings
const setCalendar = () => {
	// Add week days
	let weekDays = "";
	for (let i = 0; i < 7; i++) {
		weekDays += `<div class="week-day">${weekDaysNames[i].toUpperCase().substring(0, 3)}</div>`;
	}

	// Add month days
	let monthDays = "";
	for (let i = 0; i < monthDaysNumbers[month - 1]; i++) {
		monthDays += `<div class="month-day">${i + 1}</div>`;
	}

	monthContainer.innerHTML = weekDays + monthDays;
	monthYearContainer.innerHTML = `${monthsNames[month - 1]} ${year}`;
};

setCalendar();

// Go to previus month
leftButtonElement.addEventListener("click", (e) => {
	if (month === 1) {
		month = 12;
		year -= 1;
	} else {
		month -= 1;
	}
	setCalendar();
});

// Go to next month
rightButtonElement.addEventListener("click", (e) => {
	if (month === 12) {
		month = 1;
		year += 1;
	} else {
		month += 1;
	}
	setCalendar();
});
