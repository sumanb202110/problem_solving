var canConstruct = function(ransomNote, magazine) {
    let map1 = new Map();

    for(let i = 0; i < magazine.length; i++){
        if(!map1.get(magazine[i])){
            map1.set(magazine[i],1);
        }else{
            map1.set(magazine[i], map1.get(magazine[i])+1);
        }
    }

    for(let i = 0; i < ransomNote.length; i++){
        if(map1.get(ransomNote[i]) > 0){
            map1.set(ransomNote[i], map1.get(ransomNote[i])-1);
        }else{
            return false;
        }
    }
    return true;
};

console.log(canConstruct("aa", "ab"));