interface IMethod {
    get?: string;
    post?: string;
    update?: string;
    delete?: string;
}
export interface IHandlePermissions {
    permissions: any[];
    event: any;
}
export interface IDataPermissions {
    index: number;
    item: any;
    permissions: any;
    alter_methods?: IMethod;
}
export interface IPermissionsReturnProps {
    value: string;
    name: string;
    alter_method: any;
    checked: boolean;
}
export {};
