import Image from "next/image";
import logo from "@/public/assets/logosaas.png";
import SocialX from "@/public/assets/social-x.svg";
import SocialInsta from "@/public/assets/social-insta.svg";
import SocialLinkedIn from "@/public/assets/social-linkedin.svg";
import SocialPin from "@/public/assets/social-pin.svg";
import SocialYoutube from "@/public/assets/social-youtube.svg";
// import

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="common-container">
        <div className="inline-flex relative before:content-[''] before:top-1 before:bottom-0 before:blur before:h-full before:w-full before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <Image src={logo} height={40} alt="logo Image" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
