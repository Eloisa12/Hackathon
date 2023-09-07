import { getData, setData } from './data.js';

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
//   const readline = createInterface({
//       input: process.stdin,
//       output: process.stdout
//   });
  
//   const readLineAsync = msg => {
//       return new Promise(resolve => {
//           readline.question(msg, userRes => {
//               resolve(userRes);
//           });
//       });
//   }
  
//   const getAge = async() => {
//       const userRes = await readLineAsync("What is your age?");
//       readline.close();
//       console.log("Your age is: " + userRes);
//   }
//   const getLocation = async() => {
//     const userRes = await readLineAsync("Where are you? ");
//     readline.close();
//     console.log("Your location is: " + userRes);
//   }
//   getAge();
//   getLocation();


//const readline = require('readline');
import * as readline from "readline";

function collectUserData() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let filter = getData();

  rl.question('What is your age? ', (age) => {
    filter.age = age
    rl.question('Where are you? ', (location) => {
        filter.location = location
        //console.log(`Hello, ${name}!`);
        rl.question('What service are you looking for? ', (service) => {
            filter.service = service
            //console.log(`Hello, ${name}!`);
            rl.question('What is your religion? ', (religion) => {
                filter.religion = religion
                //console.log(`Hello, ${name}!`);
                rl.question('What is your biological sex? ', (gender) => {
                    filter.gender = gender
                    //console.log(`Hello, ${name}!`);
                    rl.question('Are you looking for public health service? ', (pub) => {
                        filter.public = pub
                        //console.log(`Hello, ${name}!`);
                        rl.question('Which day are you planning to go? ', (day) => {
                            filter.timings.day = day
                            //console.log(`Hello, ${name}!`);
                            rl.question('What time are you planning to go? ', (time) => {
                                filter.timings.time = time
                                //console.log(`Hello, ${name}!`);
                                rl.question('What sorting method? ', (sorting) => {
                                  // 0 for distance(default), 1 for relevance
                                  filter.sorting = sorting
                                  //console.log(`Hello, ${name}!`);
                                  setData(filter);
                                  rl.close();
                                });
                                setData(filter);
                                rl.close();
                              });
                          });
                      });
                  });
              });
          });
      });
  });

}

collectUserData();
// }

