const datePickerElement = document.querySelector(".date-picker");
const selectedDateElement = document.querySelector(
	".date-picker .selected-date"
);
const datesElement = document.querySelector(".date-picker .dates");
const monthElement = document.querySelector(".date-picker .dates .month .mth");
const nextMonthElement = document.querySelector(
	".date-picker .dates .month .next-mth"
);
const prevMonthElement = document.querySelector(
	".date-picker .dates .month .prev-mth"
);
const daysElement = document.querySelector(".date-picker .dates .days");

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

monthElement.textContent = months[month] + " " + year;

selectedDateElement.textContent = formatDate(date);
selectedDateElement.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
daysElement.addEventListener("wheel", (event) => {
	if (event.deltaY > 0) goToPrevMonth();
	else if (event.deltaY < 0) goToNextMonth();
});

function goToNextMonth(e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	monthElement.textContent = months[month] + " " + year;
	populateDates();
}

function goToPrevMonth(e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	monthElement.textContent = months[month] + " " + year;
	populateDates();
}

function populateDates(e) {
	daysElement.innerHTML = "";
	let amount_days = 31;

	// month === 1 === Febuary
	if (month === 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement("div");
		day_element.classList.add("day");
		day_element.textContent = i + 1;

		if (
			selectedDay == i + 1 &&
			selectedYear == year &&
			selectedMonth == month
		) {
			day_element.classList.add("selected");
		}

		day_element.addEventListener("click", function () {
			selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
			selectedDay = i + 1;
			selectedMonth = month;
			selectedYear = year;

			selectedDateElement.textContent = formatDate(selectedDate);
			selectedDateElement.dataset.value = selectedDate;

			populateDates();
		});

		daysElement.appendChild(day_element);
	}
}

// HELPER FUNCTIONS
function checkEventPathForClass(path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}

	return false;
}
function formatDate(d) {
	let day = d.getDate();
	if (day < 10) {
		day = "0" + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}

	let year = d.getFullYear();

	return day + " / " + month + " / " + year;
}
