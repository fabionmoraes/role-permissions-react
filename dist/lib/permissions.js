"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
var permissions = function (_a) {
    var index = _a.index, item = _a.item, permissions = _a.permissions;
    var data = Object.keys(item.permissions).map(function (key) {
        return { value: key, type: item.permissions[key] };
    });
    var mapData = data.map(function (v) {
        var _a;
        return ({
            value: v.value,
            name: item.name,
            checked: (_a = permissions[index]) === null || _a === void 0 ? void 0 : _a.permissions[v.value],
        });
    });
    return mapData;
};
exports.permissions = permissions;
