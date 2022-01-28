"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePermissions = void 0;
var handlePermissions = function (data) {
    var _a;
    var check = data.permissions, event = data.event;
    var _b = event.target, checked = _b.checked, value = _b.value, name = _b.name;
    var getRole = check.find(function (item) { return item.name === name; });
    var permissions = getRole === null || getRole === void 0 ? void 0 : getRole.permissions;
    var alterPermissions = __assign(__assign({}, permissions), (_a = {}, _a[value] = checked, _a));
    var alterCheck = check.map(function (item) { return (__assign(__assign({}, item), { permissions: item.name === name ? alterPermissions : item.permissions })); });
    return alterCheck;
};
exports.handlePermissions = handlePermissions;
