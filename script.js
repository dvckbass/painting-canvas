/**
 * element for canvas div
 */
var paintcanvas = document.getElementById("canvas1");

/**
 * Context for canvas
 */
var context = paintcanvas.getContext("2d");

/**
 * brush color
 */
var color = "black";

/**
 * brush radius
 */
var radius = 50;

/**
 * only paint if mouse is  being dragged (moved while the button is pressed)
 */
var isPainting = false;

/**
 * Set the width of the canvas
 *
 * @param {*} value width value
 */
function setWidth(value) {
    isNumeric(value) ? (paintcanvas.width = value) : null;
}

/**
 * Set the height of the canvas
 *
 * @param {*} value height value
 */
function setHeight(value) {
    isNumeric(value) ? (paintcanvas.height = value) : null;
}

/**
 * clear the canvas
 */
function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

/**
 * Paint a circle on the canvas at the given coordinates
 *
 * @param {*} x x-coordinate to be painted
 * @param {*} y y-coordinate to be painted
 */
function paintCircle(x, y) {
    // make sure to start a new circle each time
    context.beginPath();

    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

/**
 * verify the given value is actually a number
 *
 * @param {*} value value to be verified
 * @returns boolean status of the verification
 */
function isNumeric(value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

/**
 * Change painting state when started
 */
function startPaint() {
    isPainting = true;
}

/**
 * Change painting state when ended
 */
function endPaint() {
    isPainting = false;
}

/**
 * Start painting the canvas
 *
 * @param {*} x x-coordinate to be painted
 * @param {*} y y-coordinate to be painted
 */
function doPaint(x, y) {
    if (isPainting) {
        paintCircle(x, y);
    }
}

/**
 * Change the color of the canvas brush
 *
 * @param {*} newColor new color for the brush
 */
function changeColor(newColor) {
    color = newColor;
}

/**
 *
 * @param {*} newSize
 */
function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}
