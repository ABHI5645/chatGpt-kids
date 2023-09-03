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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <Sidebar className="w-1/5 h-screen">
        <Menu>
          <MenuItem>
            <h2 className="text-2xl font-bold">genai</h2>
          </MenuItem>
          <MenuItem icon={<LuLayoutDashboard />}>Dashboard</MenuItem>
          <MenuItem icon={<BsChatLeft />}>Conversation</MenuItem>
          <MenuItem icon={<GoImage />}>Image Generation</MenuItem>
          <MenuItem icon={<LuVideo />}>Video Generation</MenuItem>
          <MenuItem icon={<PiMusicNotesSimpleBold />}>
            Music Generation
          </MenuItem>
          <MenuItem icon={<BsCode />}>Code Generation</MenuItem>
          <MenuItem icon={<FiSettings />}>Settings</MenuItem>
        </Menu>
      </Sidebar>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
