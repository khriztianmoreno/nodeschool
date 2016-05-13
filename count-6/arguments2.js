module.exports = function makeImportant(strTxt, strLength = strTxt.length) {
    return strTxt + '!'.repeat(strLength);
};