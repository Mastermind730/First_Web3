"use client";
import React, { useState } from "react";
import { ed25519 } from "@noble/curves/ed25519";
import bs58, { encode } from "bs58";
import { useWallet } from "@solana/wallet-adapter-react";

const SignMessage = () => {
  const { publicKey, signMessage } = useWallet();
  const [message, setMessage] = useState("");

  const onSubmit = async () => {
    console.log("Button clicked")
    if (!publicKey) throw new Error("Wallet not connected!");
    if (!signMessage)
      throw new Error("Wallet does not support message signing!");

    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);
    console.log(signature,encodedMessage)
    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
      alert("success", `Message signature: ${bs58.encode(signature)}`);
      console.log("message done!!")
        setMessage("")
    
  };
  return (
    <div className="flex flex-col px-10 py-15 justify-start">
      <input
        type="text"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

      />
      <button
        className="bg-green-400 flex justify-center items-center hover:bg-green-500 px-10 py-6 mx-auto my-4 w-[120px] h-[40px] rounded-md text-center"
        onClick={onSubmit}
        type="submit"
      >
        {" "}
        Sign Message
      </button>
    </div>
  );
};

export default SignMessage;
