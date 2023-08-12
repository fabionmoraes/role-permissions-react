"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextPermission = void 0;
var nextPermission = function (_a) {
    var roles = _a.roles, _b = _a.method, method = _b === void 0 ? "GET" : _b, pathname = _a.pathname;
    var location = window.location;
    var pathnameAlter = pathname || location.pathname.replace("/", "");
    if (!roles) {
        return true;
    }
    var roleNames = roles.map(function (item) { return item.name.toUpperCase(); });
    if (!pathnameAlter)
        return true;
    if (roleNames.includes("ADMIN"))
        return true;
    var userPermissions = roles.map(function (role) { return role.permissions; });
    var permission = userPermissions
        .flat()
        .find(function (item) { return pathnameAlter.includes(item.name); });
    var convertIfString = permission === null || permission === void 0 ? void 0 : permission.permissions;
    if (convertIfString) {
        var verifyIfIsObject = typeof convertIfString === "object";
        if (verifyIfIsObject) {
            if (convertIfString[method] === true)
                return true;
        }
        else {
            var convert = JSON.parse(convertIfString);
            if (convert[method] === true)
                return true;
        }
    }
    return false;
};
exports.nextPermission = nextPermission;
