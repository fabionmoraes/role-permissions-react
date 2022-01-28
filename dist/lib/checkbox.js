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
exports.Checkbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var handlePermission_1 = require("./handlePermission");
var permissions_1 = require("./permissions");
var Checkbox = function (_a) {
    var className = _a.className, handleChange = _a.handleChange, data = _a.data;
    var index = data.index, item = data.item, check = data.permissions;
    var roles = (0, permissions_1.permissions)({ index: index, item: item, permissions: check });
    var handleCheckbox = function (event) {
        var alterCheck = (0, handlePermission_1.handlePermissions)({
            permissions: check,
            event: event,
        });
        handleChange(alterCheck);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: roles.map(function (value, i) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "role-fd" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: value.name, value: value.value, defaultChecked: value.checked, className: className || "fd", onChange: handleCheckbox }, void 0), (0, jsx_runtime_1.jsx)("span", { children: value.value }, void 0)] }), String(i))); }) }, void 0));
};
exports.Checkbox = Checkbox;
