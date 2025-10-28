const container = document.querySelector(".container");
const resetButton = document.getElementById("resetButton");


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
     let currentColor = square.style.backgroundColor;
     if (!currentColor) {
       // Random color on first hover
       const randomColor = `rgb(${Math.random() * 255}, ${
         Math.random() * 255
       }, ${Math.random() * 255})`;
       square.style.backgroundColor = randomColor;
       square.style.opacity = 0.1;
     } else {
       // Darken by increasing opacity
       let currentOpacity = parseFloat(square.style.opacity) || 0.1;
       if (currentOpacity < 1) square.style.opacity = currentOpacity + 0.1;
     }
   });

    container.appendChild(square);
  }
}

createGrid();

resetButton.addEventListener("click", () => {
    let size = prompt("Enter new grid size (max 100):")     ;

    size = parseInt(size);
    if (isNaN(size) || size < 1 || size > 100) {
      alert("Invalid size. Please enter a number between 1 and 100.");
      return;
    }

    createGrid(size);
})


