import { logoutAction } from "@/actions/auth";


export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button className="rounded-xl border px-5 py-2">
        Logout
      </button>
    </form>
  );
}