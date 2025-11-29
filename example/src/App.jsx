import React from "react";
import "./App.css"
import Spline from "@splinetool/react-spline";

export default function App() {
    return (
        <main className="w-[1800px] m-auto min-h-[100dvh]">
            <Spline scene="https://prod.spline.design/m2ZvAJgw4ucsHX6K/scene.splinecode" />
        </main>
    );
}