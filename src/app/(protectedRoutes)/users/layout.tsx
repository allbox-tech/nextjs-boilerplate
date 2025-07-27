import { DashboardLayout } from "@/components/layouts/dashboard";

const UserLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default UserLayout;
