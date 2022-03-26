// Code your solution in this file!
const driver = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    return [driver[0], driver[1]];
}

function returnLastTwoDrivers() {
    return [driver[driver.length - 2], driver[driver.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    const fareMultiplier = (fare, quadrupler = 0) => {
        if (quadrupler === 4) {
            return fare * 4;
        } 
        return fare * 5;
    };
    
    return fareMultiplier;
}

function fareDoubler() {
    const fareDoubled = createFareMultiplier()(2);
    return fareDoubled * 2;
}

function fareTripler() {
    const fareTriplicate = createFareMultiplier()(3, 4);

    return fareTriplicate * 3;
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    arrayOfDrivers = returnFirstTwoDrivers();

    return arrayOfDrivers;
}