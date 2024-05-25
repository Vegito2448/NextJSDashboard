import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/counter");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello World</h1>
    </main>
  );
}
