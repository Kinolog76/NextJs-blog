import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";

function HeaderTop () {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={assets.logo}
            alt="logo"
            width={180}
            height={180}
            className="w-[130px] sm:w-auto"
          />
        </Link>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-3px_3px_0px_#000] hover:shadow-[-7px_7px_0px_#000] focus:shadow-[-7px_7px_0px_#000] transition-all duration-300">
          Get Started <Image src={assets.arrow} alt="Get started" />
        </button>
      </div>
    </>
  )
};

export default HeaderTop
