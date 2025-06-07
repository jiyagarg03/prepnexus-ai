import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav className="">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />

          <h2 className="text-primary-100">PrepNexus</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;
