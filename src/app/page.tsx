import { redirect } from "next/navigation";
import { getOptionalUser } from "@/lib/session";

export default async function Page() {
  const user = await getOptionalUser();
  redirect(user ? "/dashboard" : "/sign-in");
}
