import { ReactNode } from "react";

import { useLogout } from "@/features/users/hooks/useLogout";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { mutate } = useLogout();

  const logoutHandler = () => {
    mutate({});
  };

  return (
    <div>
      <div>
        <p onClick={logoutHandler}>Logout</p>
      </div>
      {children}
    </div>
  );
};

export { DashboardLayout };
