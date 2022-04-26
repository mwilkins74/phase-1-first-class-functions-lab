// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return [array [0], array[1]];
}


const returnLastTwoDrivers = function(array) {
    return [array [2], array [array.length -1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function(rate) {
        return rate = rate * x;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
 
const selectDifferentDrivers =  (arrayOfDrivers, Drivers) => {
   return Drivers(arrayOfDrivers);
}
 