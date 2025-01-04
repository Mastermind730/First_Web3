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
            onChange={(e)=>setName(e.target.value)}
            className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="text" 
            placeholder="Symbol" 
            onChange={(e)=>setSymbol(e.target.value)}
            className="w-full px-4 text-black py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Create a token
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;