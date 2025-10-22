let count = 0;

const rowCount = document.getElementById("rowCount");
const addRow = document.getElementById("addRow");
const reset = document.getElementById("reset");

addRow.addEventListener("click", () => {
  count++;
  rowCount.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  rowCount.textContent = count;
});
