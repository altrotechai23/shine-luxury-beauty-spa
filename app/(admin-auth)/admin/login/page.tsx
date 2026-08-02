import { loginAction } from "@/actions/auth";


export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
      <form
        action={loginAction}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="mb-8 text-3xl font-semibold">
          Admin Login
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-xl border p-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-xl border p-3"
          required
        />

        <button
          className="w-full rounded-xl bg-black py-3 text-white transition hover:opacity-90"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}