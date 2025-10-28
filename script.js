const container = document.querySelector(".container");
const resetButton = document.getElementById("reset");
function createGrid(size = 16) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.border = "1px solid #ccc";
    square.classList.add("grid-square");

    square.addEventListener("mouseover", () => {
      square.classList.add("grid-square");
    });
    container.appendChild(square);
  }
}

createGrid();


