import Image from "next/image";
import UsersClient from "./users/UsersClient";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        {/* ✅ Added Users list below your default page content */}
        <div className='mt-16 w-full border-t border-zinc-200 pt-8 dark:border-zinc-800'>
          <UsersClient />
        </div>
      </main>
    </div>
  );
}
