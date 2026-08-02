import LogoutButton from "./LogoutButton";


export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">
      <div>
        <h1 className="text-2xl font-semibold">
          Dashboard
        </h1>

        <p className="text-sm text-neutral-500">
          Welcome back.
        </p>
      </div>

      <LogoutButton />
    </header>
  );
}