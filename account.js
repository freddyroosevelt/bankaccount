/*
 -- Bank Account App --

 How to run app: node account.js

*/

var accounts = [];

// create acct func
function createAccount(account) {
    // push onto acct array
    accounts.push(account);

    return account;
}

// getAccount func
function getAccount(username) {
    // find mathing acct using the for loop
    var matchedAccount;

    for(var i = 0; i < accounts.length; i++) {
        // check for a match account
        if(accounts[i].username === username) {
            matchedAccount = accounts[i];
        }
    }

    return matchedAccount;
}

// func despoit
function despoit(account, amount) {
    
    if(typeof amount === 'number') {

        account.balance += amount;

        var depositAmount = amount;

        console.log('A depoist of: ' + '$' + depositAmount + '.00' + ' has been added to your account!');

    }else {
        console.log('Deposit failed. Amount is not a number.');
    }
}

// withdraw
function withdraw(account, amount) {

    if(typeof amount === 'number') {
        account.balance -= amount;

        var withdrawalAmount = amount;

        console.log('A withdrawal of ' + '$' + withdrawalAmount + '.00' + ' has been deducted from your account.');

    }else {
        console.log('Withdrawal failed. Amount is not a number.');
    }
}

// getBalance
function getBalance(account) {
    return account.balance;
}

function createBalanceGetter(account) {
    return function() {
        return account.balance;
    };
}


// Create a account
var robot = createAccount({
    username: 'Mr. Robot',
    balance: 0
});

// Deposit
despoit(robot, 1000);
// Withdrawal
withdraw(robot, 250);

// Get Account
var robot2 = getAccount('Mr. Robot');
// Get Account created balance
var getRobot2Balance = createBalanceGetter(robot2);

// Log Account to console
console.log('Mr. Robot, your account balance is: ' + '$' + getRobot2Balance() + '.00');
