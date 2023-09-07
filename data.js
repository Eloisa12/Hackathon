import fs from 'fs';

const FILE_PATH = './data.json';
const READ_INPUT = fs.readFileSync(FILE_PATH);

let data = {
  age: -1,
  location: -1,
  service: -1,
  religion: -1,
  gender: -1,
  public: -1,
  timings: {
    day: -1,
    time: -1
  },
  sorting: 0,
  numCriteriaMet: 0
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