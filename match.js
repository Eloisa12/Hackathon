import { getData, setData } from './data.js';
import hospitals from "./medicalData.json" assert { type: 'json' };

function match() {
    let usrInput = getData();
    let medicList = hospitals.hospital;
    //console.log(medicList);

    // const medicList = require('./medicalData.json');

    // let medicList = JSON.parse(medicalData.json);

    for (let i = 0; i < medicList.length; i++) {

        let criteriaMatches = 0
        //check if service for user gievn issue is provided
        if (medicList[i].Services.includes(usrInput.service) || usrInput.service == -1) {
            criteriaMatches++;
        }

        //check gender
        if (medicList[i].gender == usrInput.gender || medicList[i].gender == "All" || usrInput.gender == -1) {
            criteriaMatches++;
        }

        //check age
        if (medicList[i].age[0] >= usrInput.age || medicList[i].age[1] <= usrInput.age || usrInput.age == -1) {
            criteriaMatches++;
        }

        //check religion
        if (medicList[i].Religion.includes(usrInput.religion) || usrInput.religion == -1) {
            criteriaMatches++;
        }

        //check public
        if (medicList[i].public == -1 || medicList[i].public == usrInput.public) {
            criteriaMatches++;
        }

        usrInput.numCriteriaMet = criteriaMatches;
        console.log(usrInput.numCriteriaMet);
        console.log(medicList[i]);

        setData(usrInput);
    }
} 

// function getJSON() {
//     fetch("./medicalData.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => {return data});
// }

match()