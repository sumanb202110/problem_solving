const validParan = (str) => {
    let charArr = [];

    charArr = str.split("");

    let stack = [];
    stack.push(charArr[0]);
    let i = 1;
    while(i != charArr.length){
        if(i == charArr.length && stack.length > 0){
            return false;
        }
        if(stack[stack.length-1] == '(' && charArr[i] == ')'){
            stack.pop();
        }else if(stack[stack.length-1] == '{' && charArr[i] == '}'){
            stack.pop();
        }else if(stack[stack.length-1] == '{' && charArr[i] == '}'){
            stack.pop();
        }else{
            stack.push(charArr[i]);
        }
        i++;
    }
    if(stack.length == 0){
        return true;
    }else{
        return false;
    }
}


console.log(validParan("(){}"));

