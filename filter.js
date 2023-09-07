import { getData, setData } from './data.js';

import * as readline from "readline";

export function collectUserData() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let filter = getData();

  rl.question('Pick an age catergory [Child, Adult, Elderly]? ', (age) => {
    filter.Age = age
    rl.question('Where are you? ', (location) => {
        filter.Location = location
        //console.log(`Hello, ${name}!`);
        rl.question('What service are you looking for? ', (service) => {
            filter.Service = service
            //console.log(`Hello, ${name}!`);
            rl.question('What is your primary language? ', (language) => {
                filter.Language = language
                //console.log(`Hello, ${name}!`);
                rl.question('What is your biological sex? ', (gender) => {
                    filter.Gender = gender
                    //console.log(`Hello, ${name}!`);
                    rl.question('Are you looking for public health service? ', (pub) => {
                        filter.Public = pub
                        //console.log(`Hello, ${name}!`);
                        rl.question('Which day are you planning to go? ', (day) => {
                            filter.timings.day = day
                            //console.log(`Hello, ${name}!`);
                            rl.question('What time are you planning to go? ', (time) => {
                                filter.timings.time = time
                                //console.log(`Hello, ${name}!`);
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



