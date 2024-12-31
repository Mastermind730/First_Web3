import React, { useEffect, useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Coins } from "lucide-react";

const UserBalance = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  async function getBalance() {
    try {
      if (wallet.publicKey) {
        setLoading(true);
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      } else {
        setBalance(0);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBalance();
    // Set up an interval to refresh balance every 20 seconds
    const intervalId = setInterval(getBalance, 20000);
    return () => clearInterval(intervalId);
  }, [wallet.publicKey, connection]);

  if (!wallet.publicKey) {
    return (
      <div className="flex items-center justify-center p-6 bg-white/5 rounded-lg border border-white/10">
        <p className="text-gray-400">Connect wallet to view balance</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-3 p-6 bg-white/5 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
        <Coins className="w-8 h-8 text-yellow-400" />
        <div>
          <h2 className="text-sm text-gray-400 mb-1">Current Balance</h2>
          <div className="flex items-center gap-2">
            {loading ? (
              <div className="h-8 flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <h1 className="text-2xl font-bold">
                {balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4
                })} 
                <span className="text-sm text-gray-400 ml-1">SOL</span>
              </h1>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
      
      {/* Auto-refresh indicator */}
      <div className="absolute bottom-2 right-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" 
             title="Auto-refreshing every 20 seconds" />
      </div>
    </div>
  );
};

export default UserBalance;