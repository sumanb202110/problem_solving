var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];

    for(let i = 0; i < s.size; i++){
        if(s[i] == '#'){
            stack1.pop();
        }else{
            stack1.push(s[i]);
        }
    }

    for(let i = 0; i < t.size; i++){
        if(t[i] == '#'){
            stack2.pop();
        }else{
            stack2.push(t[i]);
        }
    }

    if(stack1 == stack2){
        return true;
    }

    return false;
};

console.log(backspaceCompare())