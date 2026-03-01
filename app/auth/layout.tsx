import { AuthenticationLayout } from "@/components/ui/authentication-layout";

export const metadata = {
  title: "Auth - Earnable",
  description: "Auth",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
}