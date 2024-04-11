// P: 4 parameters
// 1. code customer enters
// 2. correct code for coupon
// 3. today's date
// 4. date of coupon expiration
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode == correctCode && new Date(currentDate) < new Date(expirationDate)
}