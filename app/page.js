import SignIn from "@/components/SignIn";
import Link from "next/link";

export default function Home() {
  return (
    <div class="min-h-screen flex justify-center items-center bg-purple-950">
      <div class="text-8xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:rotate-17 duration-300 rounded-2xl p-4">
        <Link href="/SignIn">Click To Start</Link>
      </div>
    </div>
  );
}
