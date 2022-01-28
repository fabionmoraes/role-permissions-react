import { FC } from "react";
import { IDataPermissions } from "../type";
interface ICheckbox {
    className?: string;
    handleChange: any;
    data: IDataPermissions;
}
export declare const Checkbox: FC<ICheckbox>;
export {};
