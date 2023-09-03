import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <Sidebar className="w-1/5 h-screen">
        <Menu>
          <MenuItem>
            <h2 className="text-2xl font-bold">genai</h2>
          </MenuItem>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Conversation</MenuItem>
          <MenuItem>Image Generation</MenuItem>
          <MenuItem>Video Generation</MenuItem>
          <MenuItem>Music Generation</MenuItem>
          <MenuItem>Code Generation</MenuItem>
          <MenuItem>Settings</MenuItem>
        </Menu>
      </Sidebar>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
