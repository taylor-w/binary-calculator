/* each btn */
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const output = document.getElementById("res");
// check for previous math operators
const checkOp = () => {
    if (output.innerHTML.endsWith('+') || output.innerHTML.endsWith('-')
    || output.innerHTML.endsWith('*') || output.innerHTML.endsWith('/')) {
        return true;
    }
}
// btn0 is clicked
btn0.addEventListener('click', () => {
    output.innerHTML += 0
});
// btn1 is clicked
btn1.addEventListener('click', () => {
    output.innerHTML += 1
});
// btnClr is clicked
btnClr.addEventListener('click', () => {
    output.innerHTML = ''
});
// btnSum is clicked
btnSum.addEventListener('click', () => {
    if (output.innerHTML.length != 0 && !checkOp()) {
        output.innerHTML += '+'
    }
});
// btnSub is clicked
btnSub.addEventListener('click', () => {
    if (output.innerHTML.length != 0 && !checkOp()) {
        output.innerHTML += '-'
    }
});
// btnMul is clicked
btnMul.addEventListener('click', () => {
    if (output.innerHTML.length != 0 && !checkOp()) {
        output.innerHTML += '*'
    }
});
// btnDiv is clicked
btnDiv.addEventListener('click', () => {
    if (output.innerHTML.length != 0 && !checkOp()) {
        output.innerHTML += '/'
    }
});
// btnEql is clicked
/* credit: https://www.hackerrank.com/challenges/js10-binary-calculator/forum */
btnEql.addEventListener('click', () => {
    if(!checkOp()) {
    let re = /\d+/g
    let re2 = /[\+\-\*\/]+/g
    let nums = output.innerHTML.match(re);
    let ops = output.innerHTML.match(re2);
    while(ops.length > 0) {
        if(ops.includes('*')) {
            let indexOfMul = ops.indexOf('*');
            let mul = (indexOfMul!=0 ? parseInt(nums[indexOfMul-1], 2) : parseInt(nums[indexOfMul], 2)) * parseInt(nums[indexOfMul+1],2);
            nums.splice(indexOfMul,2);
            nums.splice(indexOfMul,0,mul.toString(2));
            ops.splice(indexOfMul,1);
        } else if (ops.includes('/')) {
            let indexOfDiv = ops.indexOf('/');
            let division = (indexOfDiv!=0 ? parseInt(nums[indexOfDiv-1],2) : parseInt(nums[indexOfDiv],2)) / parseInt(nums[indexOfDiv+1],2);
            nums.splice(indexOfDiv,2);
            nums.splice(indexOfDiv, 0, division.toString(2));
            ops.splice(indexOfDiv,1);
        } else if (ops.includes('+')) {
            let indexOfSum = ops.indexOf('+');
            let sum = (indexOfSum!=0 ? parseInt(nums[indexOfSum-1],2) : parseInt(nums[indexOfSum],2)) + parseInt(nums[indexOfSum+1],2);
            nums.splice(indexOfSum,2);
            nums.splice(indexOfSum,0,sum.toString(2));
            ops.splice(indexOfSum,1);
        } else {
            let indexOfSub = ops.indexOf('-');
            let sub = (indexOfSub!=0 ? parseInt(nums[indexOfSub-1],2) : parseInt(nums[indexOfSub],2)) - parseInt(nums[indexOfSub+1],2);
            nums.splice(indexOfSub,2);
            nums.splice(indexOfSub,0,sub.toString(2));
            ops.splice(indexOfSub,1);
        }
    }
    output.innerHTML = nums[0].toString(2);
    } else {
        alert('Line must end with number.')
    }
})
