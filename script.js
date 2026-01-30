const svg = document.getElementById("svgCanvas");
const undoBtn = document.getElementById("undoBtn");
const countDisplay = document.getElementById("count");

let circles = [];

svg.addEventListener("click", function(e) {
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 8);
    circle.setAttribute("fill", "#1e80ff");

    svg.appendChild(circle);
    circles.push(circle);

    updateCount();
});

// Undo last circle
undoBtn.addEventListener("click", function() {
    if (circles.length > 0) {
        const lastCircle = circles.pop();
        svg.removeChild(lastCircle);
        updateCount();
    }
});

function updateCount() {
    countDisplay.textContent = circles.length;
}
