import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import Animations from "../utility/animations";
import { customToast } from "../utility/toast.jsx";
import Loading from "../utility/loading";

export default function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        try {
            // Create Firebase Authentication account
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email.trim(),
                password
            );

            const user = userCredential.user;

            // Save additional user information in Firestore
            await setDoc(doc(db, "Users", user.uid), {
                userName: userName.trim(),
                email: user.email,
                uid: user.uid,
                createdAt: new Date().toISOString(),
            });

            console.log("Registration successful:", user.uid);

            customToast("Registration successful!", "success");

            // Go to login page
            navigate("/login");
        } catch (error) {
            console.error("REGISTRATION ERROR:", error);
            console.error("Firebase error code:", error.code);
            console.error("Firebase error message:", error.message);

            let message = "Registration failed.";

            switch (error.code) {
                case "auth/email-already-in-use":
                    message = "This email is already registered.";
                    break;

                case "auth/invalid-email":
                    message = "Please enter a valid email address.";
                    break;

                case "auth/weak-password":
                    message = "Password must be at least 6 characters.";
                    break;

                case "permission-denied":
                    message = "Firestore permission denied.";
                    break;

                default:
                    message = error.message || "Registration failed.";
            }

            customToast(message, "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-blue-400 text-blue-950 dark:bg-blue-950 dark:text-blue-400">
            <Animations>
                <div className="min-h-screen flex items-center justify-center px-6 py-16">
                    <div className="bg-blue-950/10 dark:bg-blue-400/10 border-2 border-amber-400 p-8 rounded-lg shadow-lg w-full max-w-md text-center transition-all duration-300 hover:shadow-2xl hover:bg-blue-950/20 dark:hover:bg-blue-400/20">

                        <h1 className="text-3xl font-bold mb-6">
                            Register
                        </h1>

                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="text-left">
                                <label className="block text-sm font-medium mb-1">
                                    User Name:
                                </label>

                                <input
                                    className="w-full bg-blue-950/10 dark:bg-blue-400/10 text-blue-950 dark:text-blue-400 border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    type="text"
                                    value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="text-left">
                                <label className="block text-sm font-medium mb-1">
                                    Email:
                                </label>

                                <input
                                    className="w-full bg-blue-950/10 dark:bg-blue-400/10 text-blue-950 dark:text-blue-400 border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className="text-left">
                                <label className="block text-sm font-medium mb-1">
                                    Password:
                                </label>

                                <input
                                    className="w-full bg-blue-950/10 dark:bg-blue-400/10 text-blue-950 dark:text-blue-400 border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <button
                                className="w-full bg-amber-400 hover:bg-amber-500 text-blue-950 font-bold py-2 px-4 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? <Loading /> : "Register"}
                            </button>
                        </form>

                        <p className="text-sm mt-4">
                            Already have an account?{" "}
                            <Link
                                className="text-amber-400 hover:underline"
                                to="/login"
                            >
                                Login
                            </Link>
                        </p>

                    </div>
                </div>
            </Animations>
        </div>
    );
}