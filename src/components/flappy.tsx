import { useEffect, useState } from 'react';
import ton from "../assets/Ton_seen_from_the_side.png"

const GRAVITY = 2;
const JUMP_HEIGHT = 50;
// const PIPE_WIDTH = 50;
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

  // Handle Bird Jump
  const handleSpacebarPress = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      setIsGameStarted(true);
      setBirdPosition((prev) => Math.max(prev - JUMP_HEIGHT, 0));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleSpacebarPress);
    return () => {
      window.removeEventListener('keydown', handleSpacebarPress);
    };
  }, []);

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

  return (
    <div className="relative h-[500px] w-screen bg-blue-300 overflow-hidden rounded-xl">
      {/* Score */}
      <div className="absolute top-5 left-5 text-3xl font-bold text-white flex justify-between w-full pr-16 z-10">
        {score}
        <div className='text-black'>press SPACE to swim</div>
        <div>Swimming Ton</div>
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
    </div>
  );
}

export default Flappy;
