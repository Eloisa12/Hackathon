import { getData, setData } from './data.js';
import hospitals from "./medicalData.json" assert { type: 'json' };

export function match() {
    let usrInput = getData();
    let medicList = hospitals.Hospital;
    //console.log(medicList);

    for (let i = 0; i < medicList.length; i++) {

        let criteriaMatches = 0
        //check if service for user given issue is provided
        if (medicList[i].Services.includes(usrInput.Service) || usrInput.Service == -1) {
            criteriaMatches++;
        }

        //check gender
        if (medicList[i].Gender == usrInput.Gender || medicList[i].Gender == "All" || usrInput.Gender == -1) {
            criteriaMatches++;
        }

        //check age
        if (medicList[i].Age.includes(usrInput.Age) || usrInput.Age == -1) {
            criteriaMatches++;
        }

        //check religion
        if (medicList[i].Languages.includes(usrInput.Language) || usrInput.Language == -1) {
            criteriaMatches++;
        }

        //check public
        if (medicList[i].Public == -1 || medicList[i].Public == usrInput.Public) {
            criteriaMatches++;
        }

        if (criteriaMatches == 5) {
            usrInput.criteriaMet = true;
        } else {
            usrInput.criteriaMet = false;
        }
        setData(usrInput);

        console.log(usrInput.criteriaMet);
        console.log(medicList[i]);

    }
} 

match();

