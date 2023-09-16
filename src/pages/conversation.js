import Link from "next/link";
import React from "react";
import { LuLayoutDashboard, LuVideo } from "react-icons/lu";
import { BsChatLeft, BsCode } from "react-icons/bs";
import { GoImage } from "react-icons/go";
import { PiMusicNotesSimpleBold } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

const Conversation = () => {
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
            component={<Link href="/conversation" />}
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
      <h1 className="text-3xl font-bold underline">Explore the power of Ai</h1>
    </div>
  );
};

export default Conversation;
