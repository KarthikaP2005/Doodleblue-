var a
console.log(a)
a = 10

let b
console.log(b)
b = 10

const c = 10
console.log(c)


function greeting() {
    console.log("Hello World");
}

const res = () => {
    console.log("Hi!")
}
console.log(res)
res()

function Account(){
    let balance = 1000
    function Deposit(amount){
        balance=balance + amount
        console.log("BalanceAmount: " + balance);
    }
    return Deposit;
}
const MyAccount = Account();
MyAccount(500);
MyAccount(700);  
        
    