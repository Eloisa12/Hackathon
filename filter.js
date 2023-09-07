import { getData, setData } from './data.js';
import { createInterface } from "readline";

// function getInput() {
  // let filter = getData();
  // filter.age = prompt("What is your age?");
  // filter.location = prompt("Where are you?");
  // filter.service = prompt("What service are you looking for?");
  // filter.religion = prompt("Do you have any religion?");
  // filter.gender = prompt("What is your biological sex?");
  // filter.public = prompt("Are you looking for public or private health service?");
  // filter.timings.day = prompt("Which day are you planning to go?");
  // filter.timings.time = prompt("When are you planning to go?");
  // setData(filter);
  const readline = createInterface({
      input: process.stdin,
      output: process.stdout
  });
  
  const readLineAsync = msg => {
      return new Promise(resolve => {
          readline.question(msg, userRes => {
              resolve(userRes);
          });
      });
  }
  
  const getAge = async() => {
      const userRes = await readLineAsync("What is your age?");
      readline.close();
      console.log("Your age is: " + userRes);
  }
  const getLocation = async() => {
    const userRes = await readLineAsync("Where are you? ");
    readline.close();
    console.log("Your location is: " + userRes);
  }
  getAge();
  getLocation();
// }

