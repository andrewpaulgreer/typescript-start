var userInput;
var userName;
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// this function returns 'never' instead of 'nothing' since it throws an error and cancels our function
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
