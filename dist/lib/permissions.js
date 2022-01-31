"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
var permissions = function (_a) {
    var index = _a.index, item = _a.item, permissions = _a.permissions, alter_methods = _a.alter_methods;
    var methods = [];
    var alter_methods_keys = alter_methods;
    var data = Object.keys(item.permissions).map(function (key) {
        return { value: key, type: item.permissions[key] };
    });
    if (typeof methods === "object" && alter_methods_keys) {
        Object.keys(alter_methods_keys).forEach(function (key) {
            methods.push({
                name: key.toLocaleUpperCase(),
                value: alter_methods_keys[key],
            });
        });
    }
    var mapData = data.map(function (v) {
        var _a;
        var findMethod = methods.find(function (item) { return item.name === v.value; });
        return {
            value: v.value,
            alter_method: findMethod === null || findMethod === void 0 ? void 0 : findMethod.value,
            name: item.name,
            checked: (_a = permissions[index]) === null || _a === void 0 ? void 0 : _a.permissions[v.value],
        };
    });
    return mapData;
};
exports.permissions = permissions;
