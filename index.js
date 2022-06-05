// Write your solution in this file!
// Name my employee to be a receptionist //
const employee = {
    name: "Joy",
    streetAddress: "Uthiru",
  };
  
  function updateEmployeeWithKeyAndValue(receptionist, key, value) {
    return Object.assign({}, receptionist, { [key]: value });
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(receptionist, key, value) {
    receptionist[key] = value;
  
    return receptionist;
  }
  
  function deleteFromEmployeeByKey(receptionist, key) {
    const newObj = Object.assign({}, receptionist);
    delete newObj[key];
    return newObj;
  }
  
  function destructivelyDeleteFromEmployeeByKey(receptionist, key) {
    delete receptionist[key];
  
    return receptionist;
  }