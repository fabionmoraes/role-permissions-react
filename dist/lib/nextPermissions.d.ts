interface INextPermission {
    roles: any[];
    method?: "GET" | "POST" | "DELETE" | "UPDATE";
    pathname?: string;
}
export declare const nextPermission: ({ roles, method, pathname, }: INextPermission) => boolean;
export {};
