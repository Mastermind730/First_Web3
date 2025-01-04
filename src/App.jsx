import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { ArrowDown, Wallet, Send, MessageSquare } from 'lucide-react';
import '@solana/wallet-adapter-react-ui/styles.css';
import UserBalance from './UserBalance';
import AirDrop from './AirDrop';
import CreateToken from './CreateToken';
import SignMessage from './SignMessage';
import SendSol from './SendSol';

const App = () => {
  return (
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/XqiQD6bY6EOPkUrilyH0y7q2IFu6-Zna">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
            <div className="container mx-auto px-6 py-12">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Solana Wallet Interface
                </h1>
                <p className="text-lg text-gray-300">
                  Connect, manage, and transfer your SOL with style
                </p>
              </div>

              {/* Main Content */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Wallet Controls */}
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 border border-white/10">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <Wallet className="mr-3 h-6 w-6" /> 
                      Wallet Connection
                    </h2>
                    <div className="space-y-4">
                      <WalletMultiButton className="w-full" />
                      <WalletDisconnectButton className="w-full" />
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 border border-white/10">
                    <h2 className="text-2xl font-semibold mb-6">Balance</h2>
                    <div className="text-4xl font-bold mb-6">
                      <UserBalance />
                    </div>
                    <div className="mt-6">
                      <CreateToken />
                    </div>
                  </div>
                </div>

                {/* Right Column - Actions */}
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 border border-white/10">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <ArrowDown className="mr-3 h-6 w-6" /> 
                      Airdrop SOL
                    </h2>
                    <AirDrop />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 border border-white/10">
                      <h2 className="text-2xl font-semibold mb-6 flex items-center">
                        <Send className="mr-3 h-6 w-6" /> 
                        Send SOL
                      </h2>
                      <SendSol />
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-300 hover:bg-white/15 border border-white/10">
                      <h2 className="text-2xl font-semibold mb-6 flex items-center">
                        <MessageSquare className="mr-3 h-6 w-6" /> 
                        Sign Message
                      </h2>
                      <SignMessage />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;