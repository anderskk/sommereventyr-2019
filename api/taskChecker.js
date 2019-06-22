
function checkAnswer(task, code){
    let taskSuccess = false;
    if (task === 'capitalize') {
         taskSuccess = checkCapitalizeTask(code);
    } else if (task === 'fizzBuzz') {
        taskSuccess = checkFizzBuzzTask(code);
    } else if (task === 'reverseNumber') {
        taskSuccess = checkReverseNumberTask(code);
    } else if (task === 'longestWord') {
        taskSuccess = checkLongestWordTask(code);
        if (taskSuccess) {
            return {
                taskSuccess,
                nextUrl: 'https://www.vg.no'
            };
        }
    }

    return { taskSuccess };
}

function checkCapitalizeTask(code) {
    return check(code, 'randomStringggg', 'RandomStringggg');
}

function checkFizzBuzzTask(code) {
    return check(code, 21, true) 
        && check(code, 35, true)
        && check(code, 31, false)
        && check(code, 79, false);
}

function checkLongestWordTask(code) {
    return check(code, 'tagf sgsvgs  shgsgsvsg sgsvsg a.', 'shgsgsvsg')
        && check(code, 'hei løk', 'hei')
        && check(code, 'er det noen som leser det her', 'leser');
}

function checkReverseNumberTask(code) {
    return check(code, 456812, 218654)
        && check(code, 2541, 1452)
        && check(code, 745151, 151547);
}

function check(code, testInput, expectedAnswer) {
    try {
        const result = eval(`var myFunc = ${code}
            myFunc('${testInput}');
        `);

        return result == expectedAnswer;
    } catch (e) {
        console.log('Failed task', e);
        return false;
    }
}

function randomString(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

module.exports = checkAnswer;