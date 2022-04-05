const twoSum = () => {
    let output = [];

    const map1 = new Map();
    for( i = 0; i < arr.length; i++){
        map1.set(arr[i], i);
    }
    
    for( i = 0; i < arr.length; i++){
        let index = map1.get(num - arr[i])
        if(map1.get(num - arr[i])){
            output[0] = i;
            output[1] = index;
        } 
    }
    
    console.log(output);
}

const  arr = [3,2,4];
const num = 6;

twoSum(arr, num);

