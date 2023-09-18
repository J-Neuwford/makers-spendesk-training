"use strict";
// // function parameter
// // (param: type)
var createLogEntry = function (data, tags) {
    return {
        timeStamp: new Date(),
        data: data,
        tags: tags,
    };
};
console.log();
function displayEntry(log) {
    console.log("entry time: ".concat(log.timeStamp, " \n entry: ").concat(log.data, " \n tags: ").concat(log.tags));
}
var newEntry = createLogEntry("added an entry to the log", [
    "add",
    "new",
    "entry",
]);
console.log(newEntry);
displayEntry(newEntry);
