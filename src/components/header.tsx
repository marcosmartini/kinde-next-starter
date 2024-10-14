import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import KindeLogo from "../app/assets/kinde.svg";
import Image from "next/image";

export default async function Header() {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <header className="sticky top-0 border-[1px] border-b-[#f5f5f5] bg-white/70 backdrop-blur-md">
      <a href="/">
        <Image src={KindeLogo} width={64} alt="Kinde logo" />
        <span className="sr-only">Kinde</span>
      </a>

      <nav>
        <ul>
          {(await isAuthenticated()) ? (
            <LogoutLink>Log out</LogoutLink>
          ) : (
            <>
              <li>
                <LoginLink className="button button-uncontained">Sign in</LoginLink>
              </li>
              <li>
                <RegisterLink className="button">Register</RegisterLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
