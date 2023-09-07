import { getData } from "./data.js";
import hospitals from "./medicalData.json" assert { type: 'json' };

function sortByDistance(hospital1, hospital2) {
    if (hospital1.distance > hospital2.distance) {
        return hospital1.distance - hospital2.distance;
    }
    return hospital1.criteria - hospital2.criteria;
}

function sortByCriteria(hospital1, hospital2) {
    if (hospital1.criteria > hospital2.criteria) {
        return hospital1.criteria - hospital2.criteria;
    }
    return hospital1.distance - hospital2.distance;
}

function sortedHospitals() {
    const availableHospitals = [];
    const user = getData();
    if (user.sorting = 0) {
        availableHospitals = hospitals.sort(sortByDistance);
    } else if (user.sorting = 1) {
        availableHospitals = hospitals.sort(sortByCriteria);
    }
    return availableHospitals;
}

export {sortByDistance, sortByCriteria, sortedHospitals};