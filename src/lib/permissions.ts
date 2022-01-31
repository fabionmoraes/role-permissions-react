import { IDataPermissions, IPermissionsReturnProps } from "../type";

export interface PermissionsProps {
  id: number;
  name: string;
  permissions: any;
}

export const permissions = ({
  index,
  item,
  permissions,
  alter_methods,
}: IDataPermissions): IPermissionsReturnProps[] => {
  const methods: any[] = [];
  const alter_methods_keys: any = alter_methods;

  const data = Object.keys(item.permissions).map((key) => {
    return { value: key, type: item.permissions[key] };
  });

  if (typeof methods === "object" && alter_methods_keys) {
    Object.keys(alter_methods_keys).forEach((key) => {
      methods.push({
        name: key.toLocaleUpperCase(),
        value: alter_methods_keys[key],
      });
    });
  }

  const mapData = data.map((v) => {
    const findMethod = methods.find((item) => item.name === v.value);

    return {
      value: v.value,
      alter_method: findMethod?.value,
      name: item.name,
      checked: permissions[index]?.permissions[v.value],
    };
  });

  return mapData as IPermissionsReturnProps[];
};
