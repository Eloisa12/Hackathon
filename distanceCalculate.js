import { getData } from './data.js';
import hospitals from "./medicalData.json" assert { type: 'json' };

export function setHospitaldistance(){
    
    for (let hospital of getData().criteriaMet) {
        let result = distance(getData().Location.x, getData().Location.y, hospital.Location.x, hospital.Location.y);
        
        // add new property of distance to hospital respective to user location
        hospital.distance = result;
    }
}

setHospitaldistance()
