import { auth } from "@clerk/nextjs/server";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  return <div>{children}</div>;
};

export default AdminLayout;
