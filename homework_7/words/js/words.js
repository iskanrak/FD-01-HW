searchWord.addEventListener('click', inputData, false);
function inputData() {
    var splitWords = sourceText.value.split(" ");
    var longWord = splitWords.sort(compare);
    function compare(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    }
    outputWord.innerHTML =longWord[0] + '; ' + longWord[1] + '; ' + longWord[2] + ";";
}


