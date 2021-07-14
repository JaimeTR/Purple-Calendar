// ELEMENTS
const monthOptionsContainer = document.getElementById("select-input");
const monthContainer = document.getElementById("month");
const monthYearContainer = document.getElementById("month-year");
const leftButtonElement = document.getElementById("left-button");
const rightButtonElement = document.getElementById("right-button");
const goDateElement = document.getElementById("go-date");
const dayValue = document.getElementById("day-value");
const yearValue = document.getElementById("year-value");

// CONSTANTS
const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDaysNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const monthDaysNumbers = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// VARIABLES
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// Add months options
let monthOptions = "";
for (let i = 0; i < 12; i++) {
	monthOptions += `<option value=${i + 1}>${monthsNames[i]}</option>`;
}
monthOptionsContainer.innerHTML = monthOptions;

// Know month start day
const getStartDay = (month, year) => {
	const date = new Date(year, month - 1, 1);
	return date.getDay();
};

// Set leap year
const setLeap = () => {
	let isLeap = year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;
	monthDaysNumbers[1] = isLeap ? 29 : 28;
};

setLeap();

// Set calendar settings
const setCalendar = () => {
	// Add week days
	let weekDays = "";
	for (let i = 0; i < 7; i++) {
		weekDays += `<div class="week-day">${weekDaysNames[i].toUpperCase().substring(0, 3)}</div>`;
	}

	// Add month days
	let monthDays = `<div class="month-day" style="grid-column-start:${getStartDay(month, year)};">1</div>`;
	for (let i = 1; i < monthDaysNumbers[month - 1]; i++) {
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
	setLeap();
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
	setLeap();
	setCalendar();
});

goDateElement.addEventListener("click", (e) => {
	day = dayValue.value;
	month = monthOptionsContainer.value;
	year = yearValue.value;
	setLeap();
	setCalendar();
});
