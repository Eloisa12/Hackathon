import { getData, setData } from './data.js';
import hospitals from "./medicalData.json" assert { type: 'json' };


// Got code from online source
export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in kilometers
  
    const radLat1 = (Math.PI * lat1) / 180;
    const radLat2 = (Math.PI * lat2) / 180;
    const dLat = radLat2 - radLat1;
    const dLon = (Math.PI * (lon2 - lon1)) / 180;
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    return distance;
}

export function setHospitaldistance(){
    let userInput = getData();
    
    for (let hospital of userInput.criteriaMet) {
        let result = calculateDistance(userInput.Location.x, userInput.Location.y, hospital.Location.x, hospital.Location.y);
        // add new property of distance to hospital respective to user location
        hospital.distance = result;
    }

    setData(userInput);
}

setHospitaldistance();
