"use client";

import { use } from "react";

import { DashboardLayout } from "@/components/layouts/dashboard";
import { UserShowPage } from "@/components/pages/users/show";

const UserPage = (props: any) => {
  const params = use<Record<string, any>>(props.params);

  return <UserShowPage userId={params.id} />;
};

export default UserPage;
