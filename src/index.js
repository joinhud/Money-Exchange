// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    const halfDollar = 50;
    const quarters = 25;
    const dimes = 10;
    const nickels = 5;
    const pennies = 1;
    

    if (currency > 0) {
        if (currency > 10000) {
            result.error = 'You are rich, my friend! We don\'t have so much coins for exchange';
        } else {
            while(currency) {
                if (currency - halfDollar >= 0) {
                    currency -= halfDollar;
                    result.H ? result.H++ : result.H = 1;
                } else if (currency - quarters >= 0) {
                    currency -= quarters;
                    result.Q ? result.Q++ : result.Q = 1;
                } else if (currency - dimes >= 0) {
                    currency -= dimes;
                    result.D ? result.D++ : result.D = 1;
                } else if (currency - nickels >= 0) {
                    currency -= nickels;
                    result.N ? result.N++ : result.N = 1;
                } else {
                    currency -= pennies;
                    result.P ? result.P++ : result.P = 1;
                }
            }
        }

    }

    return result;
}
