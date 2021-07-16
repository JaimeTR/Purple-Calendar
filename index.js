// ELEMENTS
const monthContainer = document.getElementById("month-container");
const leftButtonElement = document.getElementById("left-button");
const rightButtonElement = document.getElementById("right-button");
const monthValue = document.getElementById("month-value");
const yearValue = document.getElementById("year-value");

// CONSTANTS
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// VARIABLES
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// Set calendar settings
const setCalendar = (month, year) => {
	// Set leap year
	let isLeap = year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0;
	MONTH_DAYS[1] = isLeap ? 29 : 28;

	// Get month start day
	const date = new Date(year, month - 1, 1);
	let startDate = date.getDay();

	// Add week days
	let weekDays = "";
	for (let i = 0; i < 7; i++) {
		weekDays += `<div class="week-day">${WEEK_DAYS[i].toUpperCase().substring(0, 3)}</div>`;
	}

	// Add month days
	let monthDays = `<div class="month-day" style="grid-column-start:${startDate};">1</div>`;
	for (let i = 1; i < MONTH_DAYS[month - 1]; i++) {
		monthDays += `<div class="month-day">${i + 1}</div>`;
	}

	monthContainer.innerHTML = weekDays + monthDays;
	monthValue.innerHTML = `${MONTHS[month - 1]} `;
	yearValue.value = `${year}`;
};

setCalendar(month, year);

// Go to previus month
leftButtonElement.addEventListener("click", (e) => {
	if (month === 1) {
		month = 12;
		year -= 1;
	} else {
		month -= 1;
	}
	setCalendar(month, year);
});

// Go to next month
rightButtonElement.addEventListener("click", (e) => {
	if (month === 12) {
		month = 1;
		year += 1;
	} else {
		month += 1;
	}
	setCalendar(month, year);
});
