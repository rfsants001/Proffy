"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var PageHeader_1 = require("../../components/PageHeader");
function TeacherList() {
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(PageHeader_1["default"], { title: "Proffys dispon\u00EDveis" })));
}
exports["default"] = TeacherList;
