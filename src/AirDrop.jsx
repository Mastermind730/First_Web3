import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

const AirDrop = () => {
    const wallet = useWallet();
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const { connection } = useConnection();

    const sendAirDropToUser = async () => {
        if (!amount || !wallet.publicKey) return;
        
        try {
            setLoading(true);
            await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
            setAmount('');
            // Using a more subtle notification
            const notification = document.getElementById('notification');
            notification.classList.remove('opacity-0');
            notification.classList.add('opacity-100');
            setTimeout(() => {
                notification.classList.remove('opacity-100');
                notification.classList.add('opacity-0');
            }, 3000);
        } catch (error) {
            console.error('Airdrop failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            {/* Input Group */}
            <div className="relative">
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter SOL amount"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    SOL
                </span>
            </div>

            {/* Airdrop Button */}
            <button
                onClick={sendAirDropToUser}
                disabled={!wallet.publicKey || loading || !amount}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-medium text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                    <>
                        <ArrowDown className="w-5 h-5" />
                        Request Airdrop
                    </>
                )}
            </button>

            {/* Success Notification */}
            <div 
                id="notification"
                className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg opacity-0 transition-opacity duration-300 ease-in-out"
            >
                Airdrop successful!
            </div>

            {/* Connection Status */}
            {!wallet.publicKey && (
                <p className="text-center text-sm text-gray-400">
                    Connect your wallet to request an airdrop
                </p>
            )}
        </div>
    );
};

export default AirDrop;