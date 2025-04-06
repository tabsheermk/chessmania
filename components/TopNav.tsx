import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function TopNav() {
  return (
    <div className="flex flex-col">
      <nav className="bg-gray-500">
        <h2>ChessMania</h2>
        <SignedIn>
          <UserButton />
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </nav>
    </div>
  );
}
