import { getData } from "./data.js";
import hospitals from "./medicalData.json" assert { type: 'json' };

function sortByDistance(hospital1, hospital2) {
    if (hospital1.distance > hospital2.distance) {
        return hospital1.distance - hospital2.distance;
    }
    return hospital1.criteria - hospital2.criteria;
}

function sortedHospitals() {
    const availableHospitals = [];
    const hospitals = getData();
    for (hospital of hospitals) {
        if (hospital.criteriaMet = true) {
            availableHospitals.push(hospital);
        }
    }
    availableHospitals = availableHospitals.sort(sortByDistance);
    return availableHospitals;
}


export {sortByDistance, sortedHospitals};