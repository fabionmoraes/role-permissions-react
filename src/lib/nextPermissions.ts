interface INextPermission {
  roles: any[];
  method?: "GET" | "POST" | "DELETE" | "UPDATE";
  pathname?: string;
}

export const nextPermission = ({
  roles,
  method = "GET",
  pathname,
}: INextPermission): boolean => {
  const { location } = <any>window;
  const pathnameAlter = pathname || location.pathname.replace("/", "");

  if (!roles) {
    return true;
  }

  const roleNames = roles.map((item: any) => item.name.toUpperCase());

  if (!pathnameAlter) return true;

  if (roleNames.includes("ADMIN")) return true;

  const userPermissions = roles.map((role: any) => role.permissions);
  const permission = userPermissions
    .flat()
    .find((item: any) => pathnameAlter.includes(item.name));

  const convertIfString = permission?.permissions;

  if (convertIfString) {
    const verifyIfIsObject = typeof convertIfString === "object";

    if (verifyIfIsObject) {
      if (convertIfString[method] === true) return true;
    } else {
      const convert = JSON.parse(convertIfString);

      if (convert[method] === true) return true;
    }
  }

  return false;
};
