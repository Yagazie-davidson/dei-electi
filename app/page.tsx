import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-[#0A0A0A66] bg-blend-multiply text-white bg-[url(/images/img1.jpeg)] h-[80vh] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-[32px] md:text-[80px] font-medium mb-1">
          dei electi
        </h2>
        <p className="font-normal text-base md:text-[35px] mb-2.5">
          A gallery for the exceptional.
        </p>
        <Link
          href={""}
          className="underline font-medium text-base md:text-[25px] flex items-center space-x-2"
        >
          Shop Dei Electi{" "}
          <span>
            <Image
              className=""
              src="/svg/arrow.svg"
              alt="go to"
              width={16}
              height={16}
              priority
            />
          </span>
        </Link>
      </section>
      <section className="mt-8 bg-blend-multiply text-white bg-[url(/images/img2.jpeg)] h-[704px] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-[32px] md:text-[80px] font-medium mb-1">
          Ye&apos;s salvation
        </h2>
        <p className="font-normal text-base md:text-[35px] mb-2.5">
          Redefine your wardrobe, reclaim your identity.
        </p>
        <Link
          href={""}
          className="underline font-medium text-base md:text-[25px] flex items-center space-x-2"
        >
          Shop Collection
          <span>
            <Image
              className=""
              src="/svg/arrow.svg"
              alt="go to"
              width={16}
              height={16}
              priority
            />
          </span>
        </Link>
      </section>
      <section className="text-black">
        <h2 className=" text-[20px] md:text-[40px] font-medium mb-1 mt-2 text-center">
          Ye&apos;s salvation
        </h2>
        <Link
          href={"/collection/ye-salvation"}
          className="underline font-normal text-sm md:text-[24px] flex items-center space-x-2 justify-center"
        >
          Preview Collection
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-2 px-4 place-items-center mt-4">
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group1/img1.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group1/img2.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group1/img3.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group1/img4.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#00000080] mt-8 bg-blend-multiply text-white bg-[url(/images/img3.jpeg)] h-[704px] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-[32px] md:text-[80px] font-medium mb-1">
          sportsman
        </h2>
        <p className="font-normal text-base md:text-[35px] mb-2.5">
          Champion your style, on and off the field.
        </p>
        <Link
          href={"#sportsman"}
          className="underline font-medium text-base md:text-[25px] flex items-center space-x-2"
        >
          Shop Collection
          <span>
            <Image
              className=""
              src="/svg/arrow.svg"
              alt="go to"
              width={16}
              height={16}
              priority
            />
          </span>
        </Link>
      </section>
      <section className="text-black" id="sportsman">
        <h2 className=" text-[20px] md:text-[40px] font-medium mb-1 mt-2 text-center">
          Sportsman
        </h2>
        <Link
          href={""}
          className="underline font-normal text-sm md:text-[24px] flex items-center space-x-2 justify-center"
        >
          Preview Collection
        </Link>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-0 px-4 place-items-center mt-4">
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img1.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img2.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img3.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img4.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#00000080] mt-8 bg-blend-multiply text-white bg-[url(/images/img4.jpeg)] h-[704px] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-[32px] md:text-[80px] font-medium mb-1">
          OMO NAIJA
        </h2>
        <p className="font-normal text-base md:text-[35px] mb-2.5">
          Wear your heritage.
        </p>
        <Link
          href={"#omoNaija"}
          className="underline font-medium text-base text-[25px] flex items-center space-x-2"
        >
          Shop Collection
          <span>
            <Image
              className=""
              src="/svg/arrow.svg"
              alt="go to"
              width={16}
              height={16}
              priority
            />
          </span>
        </Link>
      </section>
      <section className="text-black" id="omoNaija">
        <h2 className=" text-[20px] md:text-[40px] font-medium mb-1 mt-2 text-center">
          Omo Naija
        </h2>
        <Link
          href={""}
          className="underline font-normal text-sm md:text-[24px] flex items-center space-x-2 justify-center"
        >
          Preview Collection
        </Link>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-0 px-4 place-items-center mt-4">
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img1.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img2.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img3.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group2/img4.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#00000080] mt-8 bg-blend-multiply text-white bg-[url(/images/img5.jpeg)] h-[704px] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-[32px] md:text-[80px] font-medium mb-1">
          COLD BLOODED
        </h2>
        <p className="font-normal text-base md:text-[35px] mb-2.5">
          Shed your skin, embrace the boldd
        </p>
        <Link
          href={"#coldblooded"}
          className="underline font-medium text-base md:text-[25px] flex items-center space-x-2"
        >
          Shop Collection
          <span>
            <Image
              className=""
              src="/svg/arrow.svg"
              alt="go to"
              width={16}
              height={16}
              priority
            />
          </span>
        </Link>
      </section>
      <section className="text-black" id="coldblooded">
        <h2 className=" text-[20px] md:text-[40px] font-medium mb-1 mt-2 text-center">
          Cold Blooded
        </h2>
        <Link
          href={""}
          className="underline font-normal text-sm md:text-[24px] flex items-center space-x-2 justify-center"
        >
          Preview Collection
        </Link>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-0 px-4 place-items-center mt-4">
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img1.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img2.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img3.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img4.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#000] md:bg-[#fff] mt-8 md:bg-blend-multiply text-white md:bg-[url(/images/img6.jpeg)] h-[704px] bg-cover bg-center flex justify-center items-center flex-col">
        <h2 className="uppercase text-[32px] md:text-[80px] font-medium mb-1">
          nior
        </h2>
        <p className="font-normal text-base md:text-[35px] mb-2.5">
          The future is black, the attitude is limitless
        </p>
        <Link
          href={"#nior"}
          className="underline font-medium text-base text-[25px] flex items-center space-x-2"
        >
          Shop Collection
          <span>
            <Image
              className=""
              src="/svg/arrow.svg"
              alt="go to"
              width={16}
              height={16}
              priority
            />
          </span>
        </Link>
      </section>
      <section className="text-black" id="nior">
        <h2 className=" text-[20px] md:text-[40px] font-medium mb-1 mt-2 text-center">
          Cold Blooded
        </h2>
        <Link
          href={""}
          className="underline font-normal text-sm md:text-[24px] flex items-center space-x-2 justify-center"
        >
          Preview Collection
        </Link>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-0 px-4 md:px-16 place-items-center mt-4">
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img1.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img2.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img3.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-48 md:w-60 h-52 md:h-72 overflow-hidden">
            <Image
              src="/images/group3/img4.jpeg"
              alt="Cropped Image"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <div className="h-80"></div>
    </div>
  );
}
