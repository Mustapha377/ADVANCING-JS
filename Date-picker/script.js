import {
  format,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  endOfWeek,
  eachDayOfInterval,
  addMonths,
  subMonths,
  fromUnixTime,
  getUnixTime,
  isSameMonth,
  isSameDay,
} from "date-fns";

const dateBtn = document.querySelector(".date-picker-button");
const datepicker = document.querySelector(".date-picker");
const currentMonth = document.querySelector(".current-month");
const nextMonthBtn = document.querySelector(".next-month-button");
const prveMonthBtn = document.querySelector(".prev-month-button");
const dateGrid = document.querySelector(".date-picker-grid-dates");
const dateOfMonth = document.querySelector(".date");

let Today = new Date();

dateBtn.addEventListener("click", () => {
  datepicker.classList.toggle("show");
  const selectedDate = fromUnixTime(dateBtn.dataset.selectedDate);
  Today = selectedDate;
  setCurrentMonth(selectedDate);
});

function setDate(date) {
  const result = format(date, "MMMM do,yyyy");
  dateBtn.innerText = result;
  dateBtn.dataset.selectedDate = getUnixTime(date);
}

function setCurrentMonth(selectedDate) {
  const result = format(Today, "MMMM - yyyy");
  currentMonth.innerText = result;
  generateDaysInMonth(selectedDate);
}

function generateDaysInMonth(selectedDate) {
  const firstDayOfMonth = startOfWeek(startOfMonth(Today));
  const endDayOfMonth = endOfWeek(endOfMonth(Today));
  const days = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endDayOfMonth,
  });

  dateGrid.innerHTML = " ";

  days.forEach((day) => {
    const dayBtn = document.createElement("button");
    dayBtn.classList.add("date");
    dayBtn.innerText = day.getDate();
    if (!isSameMonth(day, Today)) {
      dayBtn.classList.add("date-picker-other-month-date");
    }
    if (isSameDay(day, selectedDate)) {
      dayBtn.classList.add("selected");
    }
    dayBtn.addEventListener("click", () => {
      setDate(day);
      datepicker.classList.remove("show");
    });

    dateGrid.appendChild(dayBtn);
  });
}

nextMonthBtn.addEventListener("click", () => {
  const selectedDate = fromUnixTime(dateBtn.dataset.selectedDate);
  Today = addMonths(Today, 1);
  setCurrentMonth(selectedDate);
});

prveMonthBtn.addEventListener("click", () => {
  const selectedDate = fromUnixTime(dateBtn.dataset.selectedDate);
  Today = subMonths(Today, 1);
  setCurrentMonth(selectedDate);
});

setDate(new Date());
