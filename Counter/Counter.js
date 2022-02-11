let txtCounter = document.getElementById("counter");
counter = 0;
const decrease = () => {
  counter = counter - 1;
  txtCounter.textContent = `${counter}`;
};
const reset = () => {
  counter = 0;
  txtCounter.textContent = `${counter}`;
};
function increase() {
  counter = counter + 1;
  txtCounter.textContent = `${counter}`;
}
