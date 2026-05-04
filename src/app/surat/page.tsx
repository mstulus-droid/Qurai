import { redirect } from "next/navigation";

export const metadata = {
  title: "Redirecting | Qurai",
};

export default async function SurahIndexPage() {
  redirect("/");
}
