"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, ChevronUp } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [openHam, setOpenHam] = React.useState(false);
  const [openHamDrop, setOpenHamDrop] = React.useState(false);
  const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-[22px]">
        <div className="block md:hidden">
          <Popover open={openHam} onOpenChange={setOpenHam}>
            <PopoverTrigger asChild>
              <Image
                className="block md:hidden cursor-pointer"
                src={`/svg/${openHam ? "cancel" : "ham"}.svg`}
                alt="Next.js logo"
                width={20}
                height={20}
                priority
              />
            </PopoverTrigger>
            <PopoverContent className="w-screen h-screen rounded-none p-10 z-50">
              <ul className="flex-col items-center justify-between space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className={`text-black hover:underline font-normal text-[16px] md:text-[28px] tracking-[.5px]`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className={`text-black hover:underline font-normal text-[16px] md:text-[28px] tracking-[.5px]`}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <div
                    onClick={() => setOpenHamDrop((prev) => !prev)}
                    className={`text-black hover:underline font-normal text-[16px] md:text-[28px] tracking-[.5px] flex`}
                  >
                    COLLECTIONS
                    <span>{openHamDrop ? <ChevronDown /> : <ChevronUp />}</span>
                  </div>
                  <div
                    className={`${
                      !openHamDrop ? "block" : "hidden"
                    } pl-10 transition duration-100 delay-150 ease-in-out`}
                  >
                    <ul className="flex-col justify-center list-disc">
                      <li>
                        {" "}
                        <Link
                          href={`/collection/${"ye-salvation"}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                          className={`text-[#D1D1D6] ${
                            pathname == "/collections" && "underline text-black"
                          }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                        >
                          YE&apos;S SALVATION
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={`/collection/${"sportsmen"}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                          className={`text-[#D1D1D6] ${
                            pathname == "/collections" && "underline text-black"
                          }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                        >
                          SPORTSMEN
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={`/collection/${"omo-naija"}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                          className={`text-[#D1D1D6] ${
                            pathname == "/collections" && "underline text-black"
                          }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                        >
                          OMO NAIJA
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={`/collection/${"cold-blooded"}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                          className={`text-[#D1D1D6] ${
                            pathname == "/collections" && "underline text-black"
                          }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                        >
                          COLD BLOODED
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          href={`/collection/${"nior"}`}
                          onClick={() => {
                            setOpen(false);
                          }}
                          className={`text-[#D1D1D6] ${
                            pathname == "/collections" && "underline text-black"
                          }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                        >
                          NIOR
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        <Link href="/">
          <Image
            className=""
            src="/svg/logo.svg"
            alt="logo"
            width={102}
            height={34}
            priority
          />
        </Link>
        <ul className="md:flex items-center hidden justify-between space-x-4">
          <li>
            <Link
              href={"#"}
              className={`text-[#D1D1D6] ${
                pathname == "/" && "underline text-black"
              } hover:text-black hover:underline font-normal text-sm md:text-[28px] tracking-[.5px]`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className={`text-[#D1D1D6] ${
                pathname == "/about" && "underline text-black"
              } hover:text-black hover:underline  font-normal text-sm md:text-[28px] tracking-[.5px]`}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            {/* <Link
              href={"#"}
              className={`text-[#D1D1D6] ${
                pathname == "/collections" && "underline text-black"
              }  hover:text-black hover:underline  font-normal text-sm md:text-[28px] tracking-[.5px]`}
            >
              COLLECTIONS
            </Link> */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Link
                  href={"#"}
                  className={`text-[#D1D1D6] ${
                    pathname == "/collections" && "underline text-black"
                  }  hover:text-black hover:underline  font-normal text-sm md:text-[28px] tracking-[.5px]`}
                >
                  COLLECTIONS
                </Link>
              </PopoverTrigger>
              <PopoverContent className="w-fit rounded-none p-10">
                <ul className="flex-col justify-center list-disc">
                  <li>
                    {" "}
                    <Link
                      href={`/collection/${"ye-salvation"}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={`text-[#D1D1D6] ${
                        pathname == "/collections" && "underline text-black"
                      }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                    >
                      YE&apos;S SALVATION
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={`/collection/${"sportsmen"}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={`text-[#D1D1D6] ${
                        pathname == "/collections" && "underline text-black"
                      }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                    >
                      SPORTSMEN
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={`/collection/${"omo-naija"}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={`text-[#D1D1D6] ${
                        pathname == "/collections" && "underline text-black"
                      }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                    >
                      OMO NAIJA
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={`/collection/${"cold-blooded"}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={`text-[#D1D1D6] ${
                        pathname == "/collections" && "underline text-black"
                      }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                    >
                      COLD BLOODED
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={`/collection/${"nior"}`}
                      onClick={() => {
                        setOpen(false);
                      }}
                      className={`text-[#D1D1D6] ${
                        pathname == "/collections" && "underline text-black"
                      }  text-black hover:underline  font-normal text-sm md:text-[16px] tracking-[.5px]`}
                    >
                      NIOR
                    </Link>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <Link className="uppercase text-[20px]" href="/auth/signup">
              Sign Up
            </Link>
          </div>
          <div>
            <Image
              className=""
              src="/svg/search.svg"
              alt="logo"
              width={20}
              height={20}
              priority
            />
          </div>
          <div>
            <Image
              className=""
              src="/svg/cart.svg"
              alt="logo"
              width={20}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
