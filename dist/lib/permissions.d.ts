import { IDataPermissions, IPermissionsReturnProps } from "../type";
export interface PermissionsProps {
    id: number;
    name: string;
    permissions: any;
}
export declare const permissions: ({ index, item, permissions, alter_methods, }: IDataPermissions) => IPermissionsReturnProps[];
