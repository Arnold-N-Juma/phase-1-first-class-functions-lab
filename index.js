// Code your solution in this file!
function returnFirstTwoDrivers()
{
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(){
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2,4) 
}


    const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
    
function createFareMultiplier(num){
    return function(fareMultiplier){
        return fareMultiplier*num
    }
}



const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);




const selectDifferentDrivers= function(drivers,selectingDrivers){
 return selectingDrivers(drivers);
}