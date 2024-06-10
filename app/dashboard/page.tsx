import { PowerIcon } from '@heroicons/react/24/outline';
import {signOut} from "@/auth";

export default function DashboardPage(): JSX.Element {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>You&apos;re logged in</h1>
            <form
                action={async () => {
                    'use server';
                    await signOut();
                }}
            >
                <button
                    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6"/>
                    <div className="hidden md:block">Sign Out</div>
                </button>
            </form>
        </main>
    )
}