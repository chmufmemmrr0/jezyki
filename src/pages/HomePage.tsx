import Button from "../components/Button";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center w-[100vw] min-h-screen margin-auto bg-[url(./assets/background.svg)] bg-no-repeat bg-cover">
            <h1 className="text-8xl font-bold mb-4 text-gray-800 animate-bounce
            bg-gradient-to-r from-orange-500 to-yellow-500
      bg-clip-text text-transparent p-4 select-none">Dzień Języków Obcych</h1>
            <div>
                <Button path="/QuizCategories">Quiz</Button>
                <Button path="/TuneTable">Name That Tune</Button>
            </div>
        </div>
    );
}