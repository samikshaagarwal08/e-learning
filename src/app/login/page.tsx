"use client";
import React, { useState } from 'react';
import { account } from '../../appwrite/appwriteConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const session = await account.createEmailPasswordSession(email, password);
            console.log('Login successful:', session);

            alert('Login successful!');
            window.location.href = '/dashboard'; // Redirect to dashboard
        } catch (error: any) {
            console.error('Error during login:', error);
            alert(`Error during login: ${error.message || 'Unknown error'}`);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#aa43f120]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#aa43f1]"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#aa43f1]"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#aa43f1] text-white py-2 rounded-md hover:bg-[#aa43f1] focus:outline-none focus:ring-2 focus:ring-[#aa43f1]"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Don’t have an account?{' '}
                        <a href="/signup" className="text-[#aa43f1] hover:underline">
                            Signup
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
