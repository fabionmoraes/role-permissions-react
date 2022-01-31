import { FC } from "react";
import { IDataPermissions } from "../type";
import { handlePermissions } from "./handlePermission";
import { permissions } from "./permissions";

interface ICheckbox {
  className?: string;
  handleChange: any;
  data: IDataPermissions;
}

export const Checkbox: FC<ICheckbox> = ({ className, handleChange, data }) => {
  const { index, item, permissions: check, alter_methods } = data;

  const roles = permissions({ index, item, permissions: check, alter_methods });

  const handleCheckbox = (event: any) => {
    const alterCheck = handlePermissions({
      permissions: check,
      event,
    });

    handleChange(alterCheck);
  };

  return (
    <div>
      {roles.map((value, i) => (
        <div key={String(i)} className={className || "role-fd"}>
          <input
            type="checkbox"
            name={value.name}
            value={value.value}
            defaultChecked={value.checked}
            onClick={handleCheckbox}
          />
          <span>{value?.alter_method || value.value}</span>
        </div>
      ))}
    </div>
  );
};
