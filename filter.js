import { getData, setData } from './data.js';

import * as readline from "readline";

export function collectUserData() {
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
                              });
                          });
                      });
                  });
              });
          });
      });
  });

}



