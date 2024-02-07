# Color_flipper
This JavaScript code adds an event listener to an HTML element with the ID 'btn'. When this button is clicked, the code generates a random color, changes the background color of the webpage to this random color, and updates the text content of an element with the class .color to display the hexadecimal value of the generated color.

// Math.random(): Generates a random number between 0 (inclusive) and 1 (exclusive).
// Math.random()*16777215: Scales the random number up to fall within the range of 0 to 16777215 (the maximum value for a 24-bit color).
// Math.floor(...): Rounds down the result to the nearest whole number, ensuring we have a valid integer to represent our color.
// toString(16): Converts the integer into a base-16 (hexadecimal) string, which is the format used for colors in web development. Hexadecimal color codes range from #000000 (black) to #FFFFFF (white).
