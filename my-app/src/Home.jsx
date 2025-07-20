import { useNavigate } from "react-router-dom";
import TypingWelcome from "./TypingWelcome";
import celebration from "./assets/celebration.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <TypingWelcome />
      </div>

      <div className="bg-sky-100 w-auto flex flex-col flex-grow lg:flex-row items-center justify-center gap-8">
        <div>
          <img
            src={celebration}
            alt="Celebration"
            className="h-90 w-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl font-semibold text-sky-700">
            Our Birthday Special: Get 15% Off
          </h2>
          <p className="mt-4 text-xl">
            Storelando is celebrating it's 5 birthday!
          </p>
          <p className="mt-4 text-lg">Only from July 1 to August 1, 2025!</p>
          <p className="text-lg">
            Enjoy 15% off when you shop at least 4 of your favorite products!
          </p>
          <button
            onClick={() => navigate("/topsellers")}
            className="mt-6 bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition"
          >
            Let’s Go →
          </button>
        </div>
      </div>
    </div>
  );
}
// Photo - Unsplash:
// https://images.unsplash.com/photo-1657497850557-b73f2c3f2c6e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxjZWxlYnJhdGlvbiUyMG9ubGluZSUyMHNob3B8ZW58MHx8MHx8fDA%3D
