//Q11. Medium Closure

function createWallet(){
    let balance=0;
    return {
        addMoney(amount){
            balance+=amount;
            console.log(amount+" added to wallet");
        },
        checkBalance(){
            console.log(" current Balance:",balance);
            return balance;
        }
    };
}

let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700
