"use client";
import React, { useState } from 'react';
import { ID } from 'appwrite';
import { account, databases } from '../../appwrite/appwriteConfig';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isValidEmail = (email: string) => {
        // Basic regex for validating email format
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return alert('Passwords do not match');
        }

        if (!isValidEmail(email)) {
            return alert('Invalid email format');
        }

        try {
            // Trim any extra spaces
            const trimmedEmail = email.trim();

            // Create a new user
            const user = await account.create(ID.unique(), trimmedEmail, password);
            console.log('User created successfully:', user);

            // Store the user data into the database
            const response = await databases.createDocument(
                '66dad64c002dcfa435ea',  // Your database ID
                '66dad6560037249d305c',  // Your collection ID
                ID.unique(),             // Unique document ID
                { userId: user.$id, email: trimmedEmail } // Ensure valid userId
            );
            console.log('Data saved to database:', response);

            alert('Signup successful! Data saved to the database.');
            window.location.href = '/dashboard'; // Redirect to dashboard
        } catch (error: any) {
            console.error('Error during signup:', error);
            // Improve error handling
            const errorMessage = error.message || 'Unknown error';
            alert(`Error during signup: ${errorMessage}`);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#aa43f120]">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                <form onSubmit={handleSignup} className="space-y-4">
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#aa43f1]"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#aa43f1] text-white py-2 rounded-md hover:bg-[#aa43f1] focus:outline-none focus:ring-2 focus:ring-[#aa43f1]"
                    >
                        Signup
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Already have an account?{' '}
                        <a href="/login" className="text-[#aa43f1] hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
