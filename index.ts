// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let arr: (string | number)[] = [];
arr.push('abul', 'babul', 2);
console.log(arr);

let obj: {
  name: string;
  age: number;
  adult: boolean;
};

obj = {
  name: 'hasin haider',
  age: 34,
  adult: true,
};
