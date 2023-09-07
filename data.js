import fs from 'fs';

const FILE_PATH = './data.json';
const READ_INPUT = fs.readFileSync(FILE_PATH);

let data = {
  Age: -1,
  Location: -1,
  Service: -1,
  Religion: -1,
  Gender: -1,
  Public: -1,
  Timings: {
    day: -1,
    time: -1
  },
  criteriaMet: false
};

// Run this globally to ensure data is loaded from file immediately.
data = JSON.parse(String(READ_INPUT));

// Modify data functions.
function getData() {
  return data;
}

function setData(newData) {
  data = newData;
  saveData();
}

function saveData() {
  const jsonStr = JSON.stringify(data);
  fs.writeFileSync(FILE_PATH, jsonStr, { flag: 'w' });
}

export { getData, setData };