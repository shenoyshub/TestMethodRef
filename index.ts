// Import stylesheets
import './style.css';
import { Test } from './test';
import { User } from './user'
// Write TypeScript code!
let UserObj:User = new User();
let TestObj:Test = new Test();

UserObj.FirstName ="Suresh";
UserObj.LastName ="Shenoy";
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = "<h1>Welecome "+TestObj.GetFullName(UserObj.GetFullName)+"</h1>";




