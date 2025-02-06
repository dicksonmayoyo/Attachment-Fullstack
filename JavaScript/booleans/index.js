import bcrypt from "bcryptjs"
function verifyPassword(inputPassword, storedHashedPassword) {
    if (bcrypt.compare(inputPassword, storedHashedPassword)==true) {
        return true
    } else {
      return false  
    }
}

// multifactor authentication

function verifyMFA(inputMfaCode, correctMfaCode) {
    if (inputMfaCode == correctMfaCode){
return true;
    }
    else{
return false
    }
}

// checkBalance
function checkBalance(balance, withdrawalAmount) {
    if (balance>=withdrawalAmount) {
        return true;
    } else {
       return false; 
    }
}
//checkDailyLimit
function checkDailyLimit(withdrawalAmount, dailyLimit) {
    if (withdrawalAmount<=dailyLimit) {
        return true
    } else {
        return false
    }
}
function processWithdrawal(user, inputPassword, inputMfaCode, withdrawalAmount){
if(verifyPassword(inputPassword, user.storedHashedPassword)==false){
    return "Transaction failed: Incorrect password!"
}
if(verifyMFA(inputMfaCode, user.correctMfaCode)==false){
    return "Transaction failed: MFA failed!"
}
if(checkBalance(user.balance, withdrawalAmount)==false){
    return "Transaction failed: Insufficient funds!"
}
if(checkDailyLimit(withdrawalAmount, user.dailyLimit)==false){
    return "Transaction failed: Amount exceeds daily limit!"
}
user.balance <= withdrawalAmount
return 'Transaction Successful! New Balance: + user.balance'
}
