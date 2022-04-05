const addTwoNum = () => {
    let output = [];

    const map1 = new Map();
    let size = Math.max(arr1.length, arr2.length);
    let carry = 0;
    let i = 0;
    for( i = 0; i < size; i++){
        let num1 = 0;
        let num2 = 0;

        if(arr1[i]){
            num1 = arr1[i];
        }
        if(arr2[i]){
            num2 = arr2[i];
        }
        output[i] = Math.floor((carry + num1 + num2)%10);
        carry = (carry + num1 + num2)/10;

    }
    if(carry > 0){
        output[i] = Math.floor(carry);
    }
    
    
    console.log(output);
}

const  arr1 = [9,9,9,9,9,9,9];
const  arr2 = [9,9,9,9];


addTwoNum();

