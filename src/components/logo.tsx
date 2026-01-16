import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  withText?: boolean;
};

export const Logo = ({ withText = false }: LogoProps) => {
  return (
    <Link href="/" className="flex items-center gap-1 group">
      <Image src="/logo/light.png" alt="Huddle" width={24} height={24} />
      {withText && (
        <span className="font-medium tracking-tight transition-opacity text-primary">
          Huddle
        </span>
      )}
    </Link>
  );
};
