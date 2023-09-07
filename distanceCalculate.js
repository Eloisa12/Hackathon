import { getData, setData } from './data.js';
import hospitals from "./medicalData.json" assert { type: 'json' };

// input - current location, mediclocation
// output - distance

export function distance(currentLocation, medicLocation) {
    const result = distance(currentLocation.x, currentLocation.y, medicLocation.x, medicLocation.y);
    return result;
}
  