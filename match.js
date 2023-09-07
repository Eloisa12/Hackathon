
export function match(usrInput) {
    let medicList = getData();

  for (let i = 0; i < medicList.length; i++) {
      criteriaMatches = 0
      //check if service for user gievn issue is provided
      if (medicList[i].service.includes(usrInput.service) || medicList[i].service == -1) {
          criteriaMatches++;
      }

      //check gender
      if (medicList[i].gender == usrInput.gender || medicList[i].gender == "All" || usrInput.gender == -1) {
          criteriaMatches++;
      }

      //check age
      if (medicList[i].age[0] >= usrInput.age || medicList[i].age[1] <= usrInput.age || usrInput.age == -1) {
          criteriaMatches++;
      }

      //check religion
      if (medicList[i].inlcudes(usrInput.religion) || usrInput.religion == -1) {
          criteriaMatches++;
      }

      //check public
      if (medicList.public == -1 || medicList.public == usrInput.public) {
          criteriaMatches++;
      }

      usrInput.numCriteriaMet = criteriaMatches;

      setData(medicList);
  }
} 