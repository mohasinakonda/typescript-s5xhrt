// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function getFullname(firstname: string, lastNane: string) {
  console.log(firstname + lastNane);
}
getFullname('mohasin', '23');
