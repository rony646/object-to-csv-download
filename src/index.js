"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = exports.objectToCsv = void 0;
function objectToCsv(data) {
    var csvRows = [];
    // getting the headers
    var headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
    var _loop_1 = function (row) {
        var values = headers.map(function (header) {
            return "\"" + row[header] + "\"";
        });
        csvRows.push(values.join(','));
    };
    // adding other rows
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        _loop_1(row);
    }
    var csv = __spreadArray(['sep=,'], csvRows);
    console.log(csv.join('\n'));
    return csv.join('\n');
}
exports.objectToCsv = objectToCsv;
;
function download(csv) {
    var blob = new Blob([csv], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    return url;
}
exports.download = download;
;
console.log('Hello, world!');
