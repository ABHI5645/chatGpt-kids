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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <Sidebar className="w-1/5 h-screen">
        <Menu className="bg-slate-900">
          <MenuItem>
            <h2 className="text-2xl font-bold">genai</h2>
          </MenuItem>
          <MenuItem
            icon={<LuLayoutDashboard style={{ color: "blue" }} />}
            className="text-gray-400 font-semibold"
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

        <div className="flex flex-col w-full justify-center items-center px-20">
          <div className=" border border-indigo-400 w-full">
            <p className="text-black"> Conversation</p>
          </div>
        </div>
      </section>
    </div>
  );
}
