/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 0;
let totalCost = 12;
const half = document.querySelector("#half");
console.log(half);
const full = document.querySelector("#full");
console.log(full);
const list = document.querySelector(".day-selector");
const daysSelected = ""


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const click = (e) => {
  console.log("Clicked!\n", e);
  if (e.target.classList.contains("clicked")) {
    e.target.classList.remove("clicked");
  } else {
    e.target.classList.add("clicked");
  }
  calculate();
};

console.log(list.children);
list.querySelectorAll(".blue-hover").forEach((e) => {
  e.addEventListener("click", click);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearButton = document.querySelector("#clear-button");
const clickedClear = () => {
  list.querySelectorAll(".clicked").forEach((e) => {
    console.log("Clicked!\n", e);
    if (e.classList.contains("clicked")) {
      e.classList.remove("clicked");
    } else return;
  });
  totalCost = 20;
};
clearButton.addEventListener("click", clickedClear);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfDay = () => {
  costPerDay = 20;
  console.log(`Cost is now `, costPerDay);
  half.classList.add("clicked");
  full.classList.remove("clicked");
  calculate();
};
half.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

const fullDay = () => {
  costPerDay = 35;
  console.log(`Cost is now `, costPerDay);
  full.classList.add("clicked");
  half.classList.remove("clicked");
  calculate();
};
full.addEventListener("click", fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const calculate = () => {
  document.querySelector("#calculated-cost").innerHTML = `${totalCost}`;
  for (let i = 0; i < daysSelected; i++) {
    if (days[i].classList.contains("clicked")) {
      totalCost += costPerDay;
    }
  }
};
