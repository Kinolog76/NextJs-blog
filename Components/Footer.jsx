import { assets } from "@/assets/assets";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={assets.logo_light} alt="Next blog" width={120} />
      <p className="text-white text-sm">All rights reserved &copy; {new Date().getFullYear()}</p>
      <div className="flex">
        <Image src={assets.googleplus_icon} alt="Instagram" width={40} />
        <Image src={assets.facebook_icon} alt="Facebook" width={40} />
        <Image src={assets.twitter_icon} alt="Twitter" width={40} />
      </div>
    </footer>
  );
}

export default Footer;
