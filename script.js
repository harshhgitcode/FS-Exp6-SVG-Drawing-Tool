const svg = document.getElementById("svgCanvas");
const undoBtn = document.getElementById("undoBtn");
const clearBtn = document.getElementById("clearBtn");
const countDisplay = document.getElementById("count");
const colorButtons = document.querySelectorAll(".color-btn");

let circles = [];
let currentColor = "#1e80ff"; // default colour blue

//  Change colour
colorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentColor = btn.getAttribute("data-color");

        // Highlight active color
        colorButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

// Draw circle
svg.addEventListener("click", function(e) {
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", currentColor);

    svg.appendChild(circle);
    circles.push(circle);

    updateCount();
});

// Undo
undoBtn.addEventListener("click", function() {
    if (circles.length > 0) {
        svg.removeChild(circles.pop());
        updateCount();
    }
});

// Clear All
clearBtn.addEventListener("click", function() {
    circles.forEach(c => svg.removeChild(c));
    circles = [];
    updateCount();
});

function updateCount() {
    countDisplay.textContent = circles.length;
}
