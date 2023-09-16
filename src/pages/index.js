import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { LuLayoutDashboard, LuVideo } from "react-icons/lu";
import { BsChatLeft, BsCode } from "react-icons/bs";
import { GoImage } from "react-icons/go";
import { PiMusicNotesSimpleBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import HeroSection from "@/components/Hero";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <Sidebar className="w-1/5 h-screen" backgroundColor="rgb(15 23 42)">
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          <MenuItem>
            <h2 className="text-2xl font-bold">genai</h2>
          </MenuItem>
          <MenuItem
            icon={<LuLayoutDashboard style={{ color: "blue" }} />}
            className="text-gray-400 font-semibold"
            component={<Link href="/" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={
              <BsChatLeft
                style={{
                  color: "purple",
                  strokeWidth: "1px",
                  stroke: "purple",
                }}
              />
            }
            className="text-gray-400 font-semibold"
          >
            Conversation
          </MenuItem>
          <MenuItem
            icon={<GoImage style={{ color: "violet" }} />}
            className="text-gray-400 font-semibold"
          >
            Image Generation
          </MenuItem>
          <MenuItem
            icon={<LuVideo style={{ color: "orange" }} />}
            className="text-gray-400 font-semibold"
          >
            Video Generation
          </MenuItem>
          <MenuItem
            icon={<PiMusicNotesSimpleBold style={{ color: "lightgreen" }} />}
            className="text-gray-400 font-semibold"
          >
            Music Generation
          </MenuItem>
          <MenuItem
            icon={<BsCode style={{ color: "green" }} />}
            className="text-gray-400 font-semibold"
          >
            Code Generation
          </MenuItem>
          <MenuItem
            icon={<FiSettings />}
            className="text-gray-400 font-semibold"
          >
            Settings
          </MenuItem>
        </Menu>
      </Sidebar>
      {/*<h1 className="text-3xl font-bold underline">Explore the power of Ai</h1>*/}

      <section className="flex flex-col gap-5 justify-items-center pt-20 items-center w-full ">
        <HeroSection />

        <div className="flex flex-col gap-3 w-full justify-center items-center px-20">
          <div className=" border border-gray-200 w-full py-3 px-2 rounded-md">
            <div className="flex flex-row gap-2">
              <div className="mt-[0.2rem] bg-violet-200 p-1 rounded-md">
                <BsChatLeft />
              </div>
              <p className="text-black font-semibold"> Conversation </p>
            </div>
          </div>
          <div className=" border border-gray-200 w-full py-3 px-2 rounded-md">
            <div className="flex flex-row gap-2">
              <div className="mt-[0.2rem] bg-pink-100 p-1 rounded-md">
                <GoImage style={{ color: "maroon" }} />
              </div>
              <p className="text-black font-semibold"> Image Generation </p>
            </div>
          </div>
          <div className=" border border-gray-200 w-full py-3 px-2 rounded-md">
            <div className="flex flex-row gap-2">
              <div className="mt-[0.2rem] bg-green-100 p-1 rounded-md">
                <PiMusicNotesSimpleBold style={{ color: "green" }} />
              </div>
              <p className="text-black font-semibold"> Music Generation </p>
            </div>
          </div>
          <div className=" border border-gray-200 w-full py-3 px-2 rounded-md">
            <div className="flex flex-row gap-2">
              <div className="mt-[0.2rem] bg-orange-50 p-1 rounded-md">
                <LuVideo style={{ color: "darkorange" }} />
              </div>
              <p className="text-black font-semibold"> Video Generation </p>
            </div>
          </div>
          <div className=" border border-gray-200 w-full py-3 px-2 rounded-md">
            <div className="flex flex-row gap-2">
              <div className="mt-[0.2rem] bg-violet-100 p-1 rounded-md">
                <BsCode style={{ color: "green" }} />
              </div>
              <p className="text-black font-semibold"> Code Generation </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
