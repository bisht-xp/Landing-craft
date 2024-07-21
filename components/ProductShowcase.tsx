import productImage from "@/public/assets/product-image.png";
import pyramidImage from "@/public/assets/pyramid.png";
import tubeImage from "@/public/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="common-container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            Sass website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            width={262}
            height={262}
            className="hidden md:block absolute -top-32 -right-36"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            width={248}
            height={248}
            className="hidden md:block absolute -left-36 bottom-24"
          />
        </div>
      </div>
    </section>
  );
};
