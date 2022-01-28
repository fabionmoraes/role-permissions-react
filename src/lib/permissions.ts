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
}: IDataPermissions): IPermissionsReturnProps[] => {
  const data = Object.keys(item.permissions).map((key) => {
    return { value: key, type: item.permissions[key] };
  });

  const mapData = data.map((v) => ({
    value: v.value,
    name: item.name,
    checked: permissions[index]?.permissions[v.value],
  }));

  return mapData as IPermissionsReturnProps[];
};
