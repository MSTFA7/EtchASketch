let height = 16;
let width = 16;
let isMouseDown = false;
let color = "black";
document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);
const sketchContainer = document.getElementById("sketch-container");

generateGrid();

const slider = document.getElementById("slider")
slider.addEventListener("input", () => {
    height = slider.value;
    width = slider.value;
    generateGrid();
})


function generateGrid() {
    removeCells();

    for (let i = 0; i < height; i++) {

        const sketchRow = document.createElement("div");
        sketchRow.classList.toggle("sketch-row");
        sketchContainer.appendChild(sketchRow);

        for (let u = 0; u < width; u++) {

            const sketchCell = document.createElement("div");
            sketchCell.classList.toggle("sketch-cell");
            sketchRow.appendChild(sketchCell);
            sketchCell.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    sketchCell.style.backgroundColor = color;
                } else {
                    sketchCell.classList.toggle("hovered");
                }
            });
            sketchCell.addEventListener("mouseout", () => {
                sketchCell.classList.toggle("hovered");
            });


        }
    }
}



function removeCells() {
    sketchContainer.replaceChildren();
}
function eraseColor() {
    const sketchCell = document.querySelectorAll(".sketch-cell");

    sketchCell.forEach(cell => {
        cell.style.backgroundColor = "";
        cell.classList.remove("hovered");
    } 
    );
}

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", eraseColor);

const colorButtons = document.querySelector(".color-palette");
colorButtons.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if(!isButton) return;
    color = event.target.value;
    console.log(color);
})