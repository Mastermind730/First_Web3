import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { ArrowDown, Wallet, Send, MessageSquare } from 'lucide-react';
import '@solana/wallet-adapter-react-ui/styles.css';
import USerBalance from './USerBalance';
import AirDrop from './AirDrop';
import './index.css';
import CreateToken from './CreateToken';
import SignMessage from './SignMessage';
const App = () => {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/XqiQD6bY6EOPkUrilyH0y7q2IFu6-Zna">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
            <div className="container mx-auto px-4 py-8">
              {/* Header */}
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl font-bold mb-4">Solana Wallet Interface</h1>
                <p className="text-gray-300">Connect, manage, and transfer your SOL with style</p>
              </div>
              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Wallet Controls */}
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <Wallet className="mr-2" /> Wallet Connection
                    </h2>
                    <div className="space-y-4">
                      <WalletMultiButton className="w-full" />
                      <WalletDisconnectButton className="w-full" />
                    </div>
                  </div>

                  {/* Balance Card */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-xl font-semibold mb-4">Balance</h2>
                    <div className="text-3xl font-bold">
                      <USerBalance />
                    </div>
                  </div>
                </div>

                {/* Right Column - Actions */}
                <div className="space-y-6">
                  {/* Airdrop Card */}
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <ArrowDown className="mr-2" /> Airdrop SOL
                    </h2>
                    <AirDrop />
                  </div>

                  {/* Future Features Preview */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                      <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <Send className="mr-2" /> Send SOL
                      </h2>
                      <p className="text-gray-400">Coming soon...</p>
                      <SendSol/>
                    </div>
                    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                      <h2 className="text-xl font-semibold mb-4 flex flex-col items-center">
                        <MessageSquare className="mr-2" /> Sign Message
                      </h2>
                      <SignMessage/>
                    </div>
                  </div>
                </div>
                <CreateToken/>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;