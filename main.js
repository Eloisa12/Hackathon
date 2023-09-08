import {match} from "./match.js"
import {collectUserData} from "./filter.js"
export {sortedHospitals} from "./ranking.js";

function main() {
    rl.question('Enter a choice (A or B): ', (choice) => {
      if (choice.toUpperCase() === 'A') {
        functionA();
      } else if (choice.toUpperCase() === 'B') {
        functionB();
      } else {
        console.log('Invalid choice. Please enter A or B.');
      }
  
      rl.close();
    });
  }
  
main();
  

collectUserData();
match();
sortedHospitals();


