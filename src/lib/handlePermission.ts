import { IHandlePermissions } from "../type";

export const handlePermissions = (data: IHandlePermissions) => {
  const { permissions: check, event } = data;

  const { checked, value, name } = event.target;

  const getRole = check.find((item) => item.name === name);
  const permissions = getRole?.permissions;

  const alterPermissions = {
    ...permissions,
    [value]: checked,
  };

  const alterCheck = check.map((item) => ({
    ...item,
    permissions: item.name === name ? alterPermissions : item.permissions,
  }));

  return alterCheck;
};
