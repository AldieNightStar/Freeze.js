# Freeze.js

## Notes:
- Allows to save variables in `sessionStorage` without explicit calls
- Starts timer and saves each interval
- Good for Variables
- One of variants to use in __Monna Histea__



## Usage:
```js
// Just start the Freeze API
// timer - Timer id (int) to Stop if needed
// V     - Variables that keeps saving each interval ms
const [timer, V] = Freeze.start(interval);


// Save some data
V.my_data = {
	A: 1,
	B: 22
};

// Load my data
const a = V.my_data.A;

// Save everything explicitly
// Does not return anything
Freeze.save();

// Load everything explicitly
// Does not return anything
Freeze.load();

// Explicitly take memory
let V = Freeze.memory;
```