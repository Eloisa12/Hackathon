import { clear, getData, setData } from './data.js';
import {match} from "./match.js"
import {sortedHospitals} from "./ranking.js";

import * as readline from "readline";

export function collectUserData() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  clear();
  let filter = getData();

  rl.question('Pick an age catergory [Children, Adult, Elderly]? ', (age) => {
    filter.Age = age
    rl.question('What\'s your x coordinate? ', (xCoord) => {
        filter.Location.x = xCoord
        rl.question('What\'s your y coordinate? ', (yCoord) => {
            filter.Location.y = yCoord
        rl.question('What service are you looking for? ', (service) => {
            filter.Service = service
            rl.question('What is your primary language? ', (language) => {
                filter.Language = language
                rl.question('What is your biological sex? ', (gender) => {
                    filter.Gender = gender
                    rl.question('Are you looking for public health service? ', (pub) => {
                        filter.Public = pub
                        rl.question('Which day are you planning to go? ', (day) => {
                            filter.timings.day = day
                            rl.question('What time are you planning to go? ', (time) => {
                                filter.timings.time = time
                                setData(filter);
                                match();
                                console.log(sortedHospitals());
                                clear();
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

collectUserData();



