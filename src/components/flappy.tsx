import { useEffect, useState } from 'react';
import ton from "../assets/Ton_seen_from_the_side.png"

const GRAVITY = 2;
const JUMP_HEIGHT = 50;
const PIPE_WIDTH = 50;
const PIPE_GAP = 150;

interface Pipe {
  height: number;
  x: number;
}

function Flappy() {
  const [birdPosition, setBirdPosition] = useState<number>(250);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [pipes, setPipes] = useState<Pipe[]>([]);
  const [pipeSpeed, setPipeSpeed] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  // const birdWidth = 50; // Width of the bird
  const birdHeight = 50; // Height of the bird
  const gameHeight = 500; // Game screen height
  
  // Bird falling logic
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isGameStarted && birdPosition < 500) {
      interval = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);
      }, 24);
    }

    return () => clearInterval(interval);
  }, [birdPosition, isGameStarted]);

   // Handle Bird Jump on Click
   const handleJump = () => {
    setIsGameStarted(true);
    setBirdPosition((prev) => Math.max(prev - JUMP_HEIGHT, 0));
  };

  // Pipes Movement
  useEffect(() => {
    if (isGameStarted) {
      const interval = setInterval(() => {
        setPipes((prevPipes) =>
          prevPipes.map((pipe) => ({ ...pipe, x: pipe.x - pipeSpeed }))
        );
      }, 24);
      return () => clearInterval(interval);
    }
  }, [isGameStarted, pipes]);

  useEffect(() => {
    if (isGameStarted) {
      const speedInterval = setInterval(() => {
        setPipeSpeed((prevSpeed) => prevSpeed + 0.5);  // Gradually increase the speed
      }, 5000); // Increase the speed every 5 seconds
  
      return () => clearInterval(speedInterval);
    }
  }, [isGameStarted]);     

  // Generate Pipes
  useEffect(() => {
    const generatePipe = setInterval(() => {
      if (isGameStarted) {
        const pipeHeight = Math.floor(Math.random() * (400 - 50) + 50);
        setPipes((prevPipes) => [
          ...prevPipes,
          { height: pipeHeight, x: 800 }, // screen width
        ]);
        setScore((prevScore) => prevScore + 1);
      }
    }, 3000);
    return () => clearInterval(generatePipe);
  }, [isGameStarted]);

// Collision Detection Logic
useEffect(() => {
  const checkCollision = () => {
    // Check for collision with the ground or top
    if (birdPosition + birdHeight >= gameHeight || birdPosition <= 0) {
      setIsGameOver(true);
    }

    // Check for collision with pipes
    pipes.forEach((pipe) => {
      const pipeTopHeight = pipe.height;
      const pipeBottomY = pipe.height + PIPE_GAP;
      // const pipeBottomHeight = gameHeight - pipeBottomY;
      const pipeX = pipe.x;

      // Check if the bird is within the pipe's horizontal range
      if (pipeX <= 100 && pipeX + PIPE_WIDTH >= 50) {
        // Check if the bird collides with the top or bottom pipe
        if (
          birdPosition <= pipeTopHeight || // Hits the top pipe
          birdPosition + birdHeight >= pipeBottomY // Hits the bottom pipe
        ) {
          setIsGameOver(true);
        }
      }
    });
  };

  if (isGameStarted && !isGameOver) {
    const collisionInterval = setInterval(() => {
      checkCollision();
    }, 24);

    return () => clearInterval(collisionInterval);
  }
}, [birdPosition, pipes, isGameStarted, isGameOver]);


  // Reset Game
  const resetGame = () => {
    setBirdPosition(250);
    setPipes([]);
    setIsGameStarted(false);
    setScore(0);
    setIsGameOver(false);
    setPipeSpeed(3);
  };

  return (
    <div className="relative h-[500px] w-screen bg-blue-300 overflow-hidden rounded-xl select-none" onClick={handleJump}>
      {/* Score */}
      <div className="absolute top-5 left-5 text-3xl font-bold text-white flex justify-between w-full pr-16 z-10 gap-2">
        {score}
        <div className='text-black'>CLICK to swim</div>
        <div className='text-sm'>Swimming Ton</div>
      </div>

      {/* Bird */}
      <img src={ton}
        className="absolute w-12 h-12"
        style={{ top: birdPosition, left: 50 }}
      ></img>

      {/* Pipes */}
      {pipes.map((pipe, index) => (
        <div key={index}>
          {/* Top Pipe */}
          <div
            className="absolute w-12 bg-green-600"
            style={{ height: pipe.height, left: pipe.x, top: 0 }}
          ></div>
          {/* Bottom Pipe */}
          <div
            className="absolute w-12 bg-green-600"
            style={{
              height: 500 - (pipe.height + PIPE_GAP),
              left: pipe.x,
              top: pipe.height + PIPE_GAP,
            }}
          ></div>
        </div>
      ))}
      {/* Restart Button */}
      {isGameOver && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 p-2 rounded-xl flex flex-col justify-center items-center gap-2 bg-opacity-50'>
          <div>You crushed Ton's cute nose :(</div>
          <button
            onClick={resetGame}
            className=" bg-red-500 text-white font-bold py-2 px-4 rounded w-1/2"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default Flappy;
