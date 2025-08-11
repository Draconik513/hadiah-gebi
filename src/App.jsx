import { useState } from "react";
import PasswordLock from "./components/PasswordLock";
import MainMenu from "./components/MainMenu";
import "./index.css";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const correctPassword = "301223"; // Ganti sesuai password kamu

  const handleUnlock = () => {
    setUnlocked(true); // Langsung buka ke MainMenu
  };

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 to-pink-900 flex flex-col items-center justify-center">
        <PasswordLock
          onUnlock={handleUnlock}
          correctPassword={correctPassword}
        />
      </div>
    );
  }

  return <MainMenu currentPage={currentPage} setCurrentPage={setCurrentPage} />;
}
