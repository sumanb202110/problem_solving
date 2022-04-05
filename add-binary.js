var addBinary = function(a, b) {
   let i  = a.length-1;
   let j = b.length-1;
   let carry  = 0;
   let ans = "";
   
   while(i >= 0 && j >= 0 || carry ){
       if(i >= 0){
        carry += a[i] - '0';
        i--;
       }

       if(j >= 0){
        carry += b[j] - '0';
        j--;
       }
       ans += carry%2;
       carry = Math.floor(carry / 2);
   }
   ans = ans.split("").reverse().join("");
   console.log(ans);
};

addBinary("11", "1");