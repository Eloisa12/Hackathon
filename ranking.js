import { sort } from "semver";
import { getData } from "./data.js";
import {setHospitaldistance} from "./distanceCalculate.js";
import hospitals from "./medicalData.json" assert { type: 'json' };

export function sortByDistance(hospital1, hospital2) {
    setHospitaldistance();

    if (hospital1.distance > hospital2.distance) {
        return hospital1.distance - hospital2.distance;
    }

    return hospital1.criteria - hospital2.criteria;
}

export function sortedHospitals() {
    let availableHospitals = [];
    const hospitals = getData().criteriaMet;
    availableHospitals = hospitals.sort(sortByDistance);
    return availableHospitals;
}

