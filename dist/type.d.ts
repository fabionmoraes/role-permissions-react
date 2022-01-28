export interface IHandlePermissions {
    permissions: any[];
    event: any;
}
export interface IDataPermissions {
    index: number;
    item: any;
    permissions: any;
}
export interface IPermissionsReturnProps {
    value: string;
    name: string;
    checked: boolean;
}
