"use client"
import {useState} from "react";
import {QuestWidget} from "@bandit-network/quest-widget"
import "@bandit-network/react-ui-kit/dist/src/styles/global.css";

const apiKey  = process.env.NEXT_PUBLIC_BANDIT_API_KEY
export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="text-white text-sm rounded-sm bg-black p-2" onClick={() => setIsOpen(true)}>Open quest</button>
      <QuestWidget
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          apiKey={apiKey as string}
          collectionId={3444}
          cluster="devnet"
          dialog={true}
      />
    </main>
  )
}
