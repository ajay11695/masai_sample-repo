// Check whether a number is Prime or not


function checkPrime(num){
    let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
            factor++;
        }
    }
    if(factor===2){
        console.log("Prime NO")
    }else{
        console.log("Not Prime NO")
    }
}
checkPrime(12);


// Check whether a string is palindrome or not.