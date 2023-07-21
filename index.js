// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(msg = 'go to the office') {
    return `This Monday, I will ${msg}.`;
}

function wrapAdjective(outerInput = "*") {
    function innerFunction(innerInput = "special") {
        return `You are ${outerInput}${innerInput}${outerInput}!`
    }
    return innerFunction;
}