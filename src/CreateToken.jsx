"use client";
import React from "react";
import { useState } from "react";

const CreateToken = () => {
  const [name,setName]=useState("")
  const [symbol,setSymbol]=useState("")
  const [imageUrl,setImageUrl]=useState("")
  const [units,setUnits]=useState("")
  return (
    <div className="min-h-[300px] w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Solana Token Launchpad
          </h1>
        </div>
        
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

            onChange={(e)=>setName(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Symbol" 
            onChange={(e)=>setSymbol(e.target.value)}
            className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          <input 
            type="text" 
            placeholder="Image URL" 
            onChange={(e)=>setImageUrl(e.target.value)} 
            className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          <input 
            type="text" 
            placeholder="Initial Supply" 
            onChange={(e)=>setUnits(e.target.value)}
            className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          <button 
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-medium text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
            Create a token
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;