import React,{useState} from 'react'
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
import { InputWithButton } from "@/components/InputWithButton";
import Link from 'next/link';
import FileUpload from '@/components/FileUpload';
import Intro from '@/components/Intro';

const Conversation = () => {
    const [transcription, setTranscription] = useState('')
    const [loading,setLoading] = useState(false)
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
            <h2 className="text-2xl text-white mb-5">genai</h2>
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
      

      <section className="flex flex-col gap-5 justify-items-center pt-20 items-center w-full ">
       <h1>
        Convert Speech To Text
       </h1>
       <div className={"w-[90%]"}><FileUpload transcription={transcription} setTranscription={setTranscription} loading={loading} setLoading={setLoading}/></div>

<h2 className={"text-lg mb-2"}>Transcript:</h2>
{transcription && <p>{transcription}</p>}
      </section>
    </div>
  )
}

export default Conversation
