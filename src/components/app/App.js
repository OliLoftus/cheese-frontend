import "./App.css";
import RandomCheese from "../randomCheese/RandomCheese";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import { useEffect, useState } from "react";
import { CursorProvider } from "../cursor/CursorContext";
import { useNavigate, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    console.log(mousePosition);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
        },
    };

    return (
        <CursorProvider>
            <motion.div
                className="cursor"
                variants={variants}
                animate="default"
            />
            <Routes>
                <Route
                    path="/"
                    element={<RandomCheese navigate={useNavigate()} />}
                />
                <Route
                    path="/login"
                    element={<LoginForm navigate={useNavigate()} />}
                />
                <Route
                    path="/signup"
                    element={<SignUpForm navigate={useNavigate()} />}
                />
            </Routes>
        </CursorProvider>
    );
}

export default App;
