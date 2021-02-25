



//problem-1
function kilometerToMeter(kilometer){
    var meter=kilometer*1000;
    if(kilometer<0){
        return "error:invalid input";
    }
    else{
       return meter;
    }

}
var meterValue=kilometerToMeter(-2);
console.log("Meter:",meterValue);
var meterValue2=kilometerToMeter(55);
console.log("Meter:", meterValue2);






//problem-2
function budgetCalculator(numberOfWatch,numberOfMobile,numberOfLaptop){

    if(numberOfWatch<0 || numberOfMobile<0 || numberOfLaptop<0){
        return "error: number of an object can not be negative.";
    }
    else{
        var watchCost=numberOfWatch*50;
        var mobileCost=numberOfMobile*100;
        var laptopCost=numberOfLaptop*500;
        var totalBudget= watchCost+mobileCost+laptopCost;
        return totalBudget;
    }
}
var total= budgetCalculator(15,10,5);
console.log("Total Budget :",total);
var total2= budgetCalculator(5,-14,20);
console.log("Total Budget:",total2);







//problem-3
function hotelCost(daysSpent){
    var cost=0;
    if(daysSpent<=10){
        cost=daysSpent*100;
    }
    else if(daysSpent<=20){
        var costOfFirstTenDays=10*100;
        var remainingDays=daysSpent-10;
        var costOfRemainingDays=remainingDays*80;
        cost=costOfFirstTenDays+costOfRemainingDays;
    }
    else{
        var costOfFirstTenDays=10*100;
        var costOfSecondTenDays=10*80;
        var remainingDays=daysSpent-20;
        var costOfRemainingDays=remainingDays*50;
        cost=costOfFirstTenDays +costOfSecondTenDays + costOfRemainingDays;

    }
    return cost;
}
var totalHotelCost=hotelCost(22);
console.log("Total Cost:",totalHotelCost);






//problem-4
function megaFriend(nameArray)
{
    var element;
    var longestName=nameArray[0];
    for(i=0;i<nameArray.length;i++){
        element=nameArray[i];
        if(element.length>longestName.length){
            longestName=element;
        }
    }
    return longestName;

}
var names=['Rohim','Karim','Jolim', 'Solim', 'Jamal','Kamal', 'Komlauddin','Muminur','Ketab Uddin'];
var longestname=megaFriend(names);
console.log("Longest Name:",longestname);