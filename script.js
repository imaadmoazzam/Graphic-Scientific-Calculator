// Imaad Moazzam

// setting up variables & arrays
let expression = ''; // expression for actual calculation which includes math.operations(x) instead of √x (not to be shown to user)
let equation = '';  // expression to show the user (aestheics) which includes math symbols such as ÷ instead of / since js doesnt see ÷ as division
let ans = '';
let secMode = false; // making sure 2nd function isn't enabled on launch (setting it to falase)
let colMode = false; //  set light mode to default on launch
let helpMode = false; // don't immediately display the help text
let hisMode = false; // // keeps history off on launch
const saveAns = []; // sets the history array
const screen = document.getElementById("calcScreen") // gets this id in divs so we can access it at later time to update it whenever

// functions
function updateScreen () { // updates the calculater screen live on user input
    screen.textContent = equation; // sets the screen text to whatever the user inputs / the result
};

// toggle buttons
// toggle 2nd function
const but2nd = document.getElementById("but2nd"); // gets 2nd function div
but2nd.addEventListener("click", () => { // checks when button is clicked
    secMode = !secMode; // toggles second function mode on/off
    but2nd.classList.toggle("active"); // visually changes how the button looks to show user that it's toggled
    rootbut.textContent = secMode ? '³√x' : '²√x'; // changes to the text content to show the access to the new operations while in 2nd function mode
    sinbut.textContent = secMode ? 'sin⁻¹' : 'sin';
    cosbut.textContent = secMode ? 'cos⁻¹' : 'cos';
    tanbut.textContent = secMode ? 'tan⁻¹' : 'tan';
});

// toggles dark-mode/light-mode
const colorbut = document.getElementById("colorbut"); // gets colorbut div
colorbut.addEventListener("click", () => { // checks when clicked
    colMode = !colMode; // toggles dark-mode on/off
    document.body.classList.toggle("dark-mode", colMode) // adds/removes dark mode from the body of the page
    colorbut.textContent = colMode ? 'Light Mode' : 'Dark Mode'; // changes button text to reflect mode
});

// toggles help content
const helpbut = document.getElementById("helpbut"); // gets help div
helpbut.addEventListener("click", () => { // checks when clicked
    helpMode = !helpMode; // toggles help content
    leftBot.textContent = helpMode  // when clicked, adds/removes the following text
    ? '1. Close all shown brackets on the screen (i.e sin((requires to closed brackets at the end)\n\n2. Do not add multiple operations in a row (i.e 2++3). It will give you an error\n\n3. You can bring pack your previous calculated answer using \'ans button\' (i.e you calculated 3+2 which is 5, press ans+3, it calculates to 8\n\n4. Press \'2nd\' to access the inverse trig functions and cube root\n\n5. Press \'A/C\' to clear whole expression. NOTE: ans is still saved, so you can bring your previous calculation onwards\n\n6. enter in DEGREES when using trig functions' // this is the text while on
    : '' // this is the text while off
});

// toggles history content
const historybut = document.getElementById("historybut"); // gets historybut div
historybut.addEventListener("click", () => { // checks when clicked
    hisMode = !hisMode; // toggles on the history content
    historyText.textContent = hisMode // when clicked, add/remove the following text
    ? saveAns : ''; // while on, adds saveAns which is the history array, while off, remove everything
});

// number pad buttons
// 0 number button
const button0 = document.getElementById("button0"); // gets the number button div
button0.addEventListener("click", () => { // checks when the button is clicked
    expression += '0'; // adds to the 'to be' evaluated equation
    equation += '0'; // adds to the aesthetic equation, which is showed to the user
    updateScreen(); // updates the calculator screen which shows the button number
});
// 1 number button
const button1 = document.getElementById("button1");
button1.addEventListener("click", () => {
    expression += '1';
    equation += '1';
    updateScreen();
});
// 2 number button
const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
    expression += '2';
    equation += '2';
    updateScreen();
});
// 3 number button
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
    expression += '3';
    equation += '3';
    updateScreen();
});
// 4 number button
const button4 = document.getElementById("button4");
button4.addEventListener("click", () => {
    expression += '4';
    equation += '4';
    updateScreen();
});
// 5 number button
const button5 = document.getElementById("button5");
button5.addEventListener("click", () => {
    expression += '5';
    equation += '5';
    updateScreen();
});
// 6 number button
const button6 = document.getElementById("button6");
button6.addEventListener("click", () => {
    expression += '6';
    equation += '6';
    updateScreen();
});
// 7 number button
const button7 = document.getElementById("button7");
button7.addEventListener("click", () => {
    expression += '7';
    equation += '7';
    updateScreen();
});
// 8 number button
const button8 = document.getElementById("button8");
button8.addEventListener("click", () => {
    expression += '8';
    equation += '8';
    updateScreen();
});
// 9 number button
const button9 = document.getElementById("button9");
button9.addEventListener("click", () => {
    expression += '9';
    equation += '9';
    updateScreen();
});

// ans button
const buttonans = document.getElementById("buttonans"); // gets ans buton div
buttonans.addEventListener("click", () => { // checks when clicked
    expression += ans.toString(); // convert ans back to a string since when expression is evaluated, an integer is returned, and add that to the 'to be' evaluated expression
    equation += 'ans'; // adds 'ans' to the aestheic equation shown on the calculator screen which represents the previous evaluated number
    updateScreen(); // updates calculator screen to reflect input/output
});

// decimal button
const buttondot = document.getElementById("buttondot"); // gets dotbutton div
buttondot.addEventListener("click", () => { // checks when clicked
    expression += '.'; // adds decimal to 'to be' evaluated expression
    equation += '.'; // adds decimal to aesthetic equation
    updateScreen(); // update the calculator screen to reflec input/output
});

// equals button
const buttoneq = document.getElementById("buttoneq"); // gets equal button div
buttoneq.addEventListener("click", () => { // checks when clicked
    try { // tries following code
        let result = eval(expression) // evaluates 'expression'
        result = Math.round(result*1e9)/1e9; // rounds result to 9 decimal places
        expression = result // set the current expression = to the result so users can keep using the same number for more calculations continously
        equation = result // set the aesthetic equations = to result
        ans = result.toString() // set ans to result after converting to a string, as eval returns integer
        saveAns.push(result) // adds the answer to the history array
        if (hisMode == true) { // if history is toggled
            historyText.textContent = saveAns; // update the list of previous answers live
        }
        updateScreen();} // update the calculator screen to showcase the result
    catch (error) { // if previous code fails, run the following
        expression = ''; // resets expression
        equation += ''; // resets equation
        screen.textContent = 'Error'; // update the screen to show 'Error'
    }
});

// basic operation buttons
// addition button
const addBut = document.getElementById("addBut"); // gets div
addBut.addEventListener("click", () => { // checks when clicked
    expression += '+'; // adds basic operation to 'to be' calculated expression
    equation += '+'; // adds basic operation to aesthetic equation
    updateScreen(); // update the calculator screen
});

// subtraction button
const subBut = document.getElementById("subBut");
subBut.addEventListener("click", () => {
    expression += '-';
    equation += '-';
    updateScreen();
});

// multiplication button
const multiBut = document.getElementById("multiBut");
multiBut.addEventListener("click", () => {
    expression += '*';
    equation += '×';
    updateScreen();
});

// division button
const diviBut = document.getElementById("diviBut");
diviBut.addEventListener("click", () => {
    expression += '/';
    equation += '÷';
    updateScreen();
});

// all clear button
const clearBut = document.getElementById("clearBut"); // gets all clear div
clearBut.addEventListener("click", () => { // checks when clicked
    expression = ''; // resets expression
    equation = ''; // resets equation
    result = ''; // resets result
    updateScreen(); // update the screen
});

// trigonometry functions
// sine function
const sinbut = document.getElementById("sinbut"); // gets trig div
sinbut.addEventListener("click", () => { // checks when clicked
    if (secMode == true) { // if 2nd function is toggled
        expression += '(180/Math.PI)*Math.asin('; // takes a value between -1 and 1, take the inverse of corresponding trig function, and convert that answer from radians to degrees
        equation += 'sin⁻¹('  // adds the inverse of trig function to aesthetic equation
    }
    else { // if 2nd function is toggled off
        expression += 'Math.sin(Math.PI/180*(' // convert current expression to from degrees to radian, then take trig of that
        equation += 'sin(('; // add trig operations to aesthetic equation
    }
    updateScreen(); // update screen
});


// cosine function
const cosbut = document.getElementById("cosbut");
cosbut.addEventListener("click", () => {
    if (secMode == true) { 
        expression += '(180/Math.PI)*Math.acos(';
        equation += 'cos⁻¹(';
    } else {
        expression += 'Math.cos(Math.PI/180*('
        equation += 'cos((';  
    }
    updateScreen();
});

// tangent function
const tanbut = document.getElementById("tanbut");
tanbut.addEventListener("click", () => {
    if (secMode == true) {
        expression += '(180/Math.PI)*Math.atan(';
        equation += 'tan⁻¹(';
    } else {
        expression += 'Math.tan(Math.PI/180*('
        equation += 'tan((';
    }
    updateScreen();
});

// root function
const rootbut = document.getElementById("rootbut"); // gets roots div
rootbut.addEventListener("click", () => { // checks when clicked
    if (secMode == true) { // if 2nd function is toggled
        expression += 'Math.cbrt('; // take the cube root of current expression
        equation += '³√('; // add cube root symbol to aesthetic equation
    } 
    else { // if 2nd functions is toggled off
        expression += 'Math.sqrt(' // take the square root of current expression
        equation += '²√('; // add square root symbol to aethetic equation
    }
    updateScreen(); // update the screen 
});


// exponential function
const powerbut = document.getElementById("powerbut"); // gets power div
powerbut.addEventListener("click", () => { // checks when clicked
    expression += '**'; // take expression to the power of any number
    equation += '^'; // adds power symbol to aesthetic equation
    updateScreen(); // updates the screen
});

// left bracket button
const lbrackbut = document.getElementById("lbrackbut"); // gets left bracket div
lbrackbut.addEventListener("click", () => { // checks when clicked
    expression += '('; // adds left bracket to 'to be' evaluated expression
    equation += '('; // adds left bracket to aeshetic equation
    updateScreen(); // updates the screen
});

// right bracket button
const rbrackbut = document.getElementById("rbrackbut"); // gets right bracket div
rbrackbut.addEventListener("click", () => { // checks when clicked
    expression += ')'; // adds right bracket to 'to be' evaluated expression
    equation += ')'; // adds right bracket to aesthetic expression
    updateScreen(); // updates the screen
});
