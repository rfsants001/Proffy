"use strict";
exports.__esModule = true;
var react_1 = require("react");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var vector_icons_1 = require("@expo/vector-icons");
var TeacherList_1 = require("../pages/TeacherList");
var Favorites_1 = require("../pages/Favorites");
var _a = bottom_tabs_1.createBottomTabNavigator(), Navigator = _a.Navigator, Screen = _a.Screen;
function StudyTabs() {
    return (react_1["default"].createElement(Navigator, { tabBarOptions: {
            style: {
                elevation: 0,
                shadowOpacity: 0,
                height: 64
            },
            tabStyle: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                marginLeft: 16
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d'
        } },
        react_1["default"].createElement(Screen, { name: "TeacherList", component: TeacherList_1["default"], options: {
                tabBarLabel: 'Proffys',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size, focused = _a.focused;
                    return (react_1["default"].createElement(vector_icons_1.Ionicons, { name: "ios-easel", size: size, color: focused ? '#8257e5' : color }));
                }
            } }),
        react_1["default"].createElement(Screen, { name: "Favorites", component: Favorites_1["default"], options: {
                tabBarLabel: 'Favoritos',
                tabBarIcon: function (_a) {
                    var color = _a.color, size = _a.size, focused = _a.focused;
                    return (react_1["default"].createElement(vector_icons_1.Ionicons, { name: "ios-heart", size: size, color: focused ? '#8257e5' : color }));
                }
            } })));
}
exports["default"] = StudyTabs;
