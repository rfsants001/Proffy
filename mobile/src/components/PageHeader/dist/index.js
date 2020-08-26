"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var native_1 = require("@react-navigation/native");
var back_png_1 = require("../../assets/images/icons/back.png");
var logo_png_1 = require("../../assets/images/logo.png");
var styles_1 = require("./styles");
var PageHeader = function (_a) {
    var title = _a.title;
    var navigate = native_1.useNavigation().navigate;
    function handleGoBack() {
        navigate('Landing');
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].container },
        react_1["default"].createElement(react_native_1.View, { style: styles_1["default"].topBar },
            react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { onPress: handleGoBack },
                react_1["default"].createElement(react_native_1.Image, { source: back_png_1["default"], resizeMode: 'contain' })),
            react_1["default"].createElement(react_native_1.Image, { source: logo_png_1["default"], resizeMode: 'contain' })),
        react_1["default"].createElement(react_native_1.Text, { style: styles_1["default"].title }, title)));
};
exports["default"] = PageHeader;
