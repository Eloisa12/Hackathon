import { sort } from "semver";
import { getData } from "./data.js";
import {setHospitaldistance} from "./distanceCalculate.js";
import hospitals from "./medicalData.json" assert { type: 'json' };

export function sortByDistance(hospital1, hospital2) {
    setHospitaldistance();

    if (hospital1.distance > hospital2.distance) {

        // console.log(hospital1.distance - hospital2.distance);
        return hospital1.distance - hospital2.distance;
    }
    // console.log(hospital1.criteria - hospital2.criteria)
    return hospital1.criteria - hospital2.criteria;
}

export function sortedHospitals() {
    const availableHospitals = [];
    const hospitals = getData();
    availableHospitals = hospitals.sort(sortByDistance);
    return availableHospitals;
}

sortedHospitals();
console.log(availableHospitals);