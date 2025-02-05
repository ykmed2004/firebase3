"use client";

import { useState } from "react";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthComponent() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLogin, setIsLogin] = useState(true);

const handleAuth = async () => {
    try {
        if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("ログイン成功");
        } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("ユーザー登録成功");
        }
    } catch (error: any) {
    alert(error.message);
    }
};

return (
    <div className="p-4 max-w-md mx-auto">
    <h2 className="text-xl mb-4">{isLogin ? "ログイン" : "新規登録"}</h2>
    <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
    />
    <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
    />
    <button onClick={handleAuth} className="bg-blue-500 text-white p-2 w-full">
        {isLogin ? "ログイン" : "登録"}
    </button>
    <p onClick={() => setIsLogin(!isLogin)} className="text-blue-500 cursor-pointer mt-2">
        {isLogin ? "新規登録はこちら" : "ログインはこちら"}
    </p>
    </div>
);
}
