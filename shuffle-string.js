var restoreString = function(s, indices) {
    let map1 = new Map();
    let output = "";

    for(let i = 0; i < s.length; i++){
        map1.set(indices[i], s[i]);
    }
    for(let i = 0; i < s.length; i++){
        output += map1.get(i);
    }

    console.log(output);
};

restoreString("codeleet", [4,5,6,7,0,2,1,3]);