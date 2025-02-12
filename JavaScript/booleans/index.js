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

// 1. Password Authentication:
// Why is it important to store passwords in a hashed format? What security advantage does this provide over plain text passwords?
// Storing passwords in a hashed format is essential because it protects user credentials even if the database is compromised. Hashing converts passwords into a fixed-length string using a cryptographic algorithm, making it nearly impossible to reverse-engineer. Unlike plain text storage, hashed passwords prevent attackers from directly reading user credentials. Additionally, using a salt (random data added before hashing) further enhances security by preventing precomputed attacks such as rainbow table attacks.

// 2. Multi-Factor Authentication (MFA):
// How does implementing MFA enhance the security of the transaction process? What types of attacks does it help prevent?
// MFA enhances security by requiring multiple forms of verification (e.g., a password and a one-time code sent to a phone). This reduces the risk of unauthorized access, even if an attacker steals one authentication factor. MFA helps prevent:

// Credential stuffing attacks (where stolen credentials are used across multiple accounts)
// Phishing attacks (since attackers need more than just a password)
// Brute-force attacks (because an additional factor is required beyond just guessing passwords)
// 3. Balance Verification:
// Why is it necessary to check the account balance before allowing a withdrawal? What risks are involved if this step is skipped?
// Checking the account balance ensures that there are sufficient funds before processing a withdrawal, preventing overdrafts and negative balances. Skipping this step can lead to risks such as:

// Overdrafts or negative balances, which may cause financial losses for banks or users
// Fraudulent withdrawals, where someone intentionally attempts to withdraw more than the available funds
// System abuse, where malicious users exploit missing checks to manipulate transactions
// 4. Daily Transaction Limit:
// What purpose does the daily transaction limit serve? How does it help in preventing fraudulent or excessive withdrawals?
// A daily transaction limit restricts the maximum amount a user can withdraw or transfer in a single day. This prevents:

// Fraudulent activity, where attackers drain an account in one go
// Excessive spending, helping users manage their finances
// Damage from compromised credentials, as attackers cannot withdraw all funds at once
// 5. Improvement:
// If you were to add extra features, such as fraud detection (e.g., detecting abnormal withdrawal patterns), how would you go about doing this? What additional data would you track to detect fraud?
// To implement fraud detection, I would track:

// Transaction history (detecting sudden spikes in withdrawal amounts)
// Geolocation data (flagging logins from unusual locations)
// Device information (identifying new or suspicious devices)
// Time-based patterns (e.g., multiple withdrawals at odd hours)