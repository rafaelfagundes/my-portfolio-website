import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const CANVAS_WIDTH = 850;
const CANVAS_HEIGHT = 640;
const BALL_RADIUS = 12;
const PADDLE_HEIGHT = 10;
const PADDLE_WIDTH = 75;

let paddleX = (CANVAS_WIDTH - PADDLE_WIDTH) / 2;

let x = CANVAS_WIDTH / 2;
let y = CANVAS_HEIGHT - 30;

let dx = 2;
let dy = -2;

let score = 0;
let lives = 3;

let brickRowCount = 5;
let brickColumnCount = 4;
let brickWidth = 150;
let brickHeight = 40;
let brickPadding = 10;
let brickOffsetTop = 64;
let brickOffsetLeft = 30;

let bricks: any = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

const StyledCanvas = styled.canvas`
  display: block;
  margin: 0 auto;
  border-radius: 10px;
  cursor: pointer;
`;

function drawBall(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
) {
  ctx.beginPath();
  ctx.arc(x, y, BALL_RADIUS, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle(
  ctx: CanvasRenderingContext2D,
  PADDLE_X: number,
  color: string
) {
  ctx.beginPath();
  ctx.rect(
    PADDLE_X,
    CANVAS_HEIGHT - PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawScore(ctx: CanvasRenderingContext2D, primaryColor: string) {
  ctx.font = "22px Outfit";
  ctx.fillStyle = primaryColor;
  ctx.fillText("💎  " + score, 28, 42);
}

function drawLives(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement | null,
  primaryColor: string
) {
  if (canvas !== null && canvas !== undefined) {
    ctx.font = "22px Outfit";
    ctx.fillStyle = primaryColor;
    ctx.fillText("❤️  " + lives, 96, 42);
  }
}

function drawBricks(ctx: CanvasRenderingContext2D, primaryColor: string) {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = primaryColor;
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function SkillsBlockBreaker() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const primaryColor = useColorModeValue("#440044", "#FC7A57");
  const bgColor = useColorModeValue("rgba(255,255,255,.4)", "rgba(0,0,0,.15)");
  const bgColorLostMessage = useColorModeValue(
    "rgba(240,96,96,.9)",
    "rgba(100,40,40,.9)"
  );
  const bgColorWinMessage = useColorModeValue(
    "rgba(200,180,0,.9)",
    "rgba(140,126,0,.95)"
  );
  const ballColor = useColorModeValue("#DE3C4B", "#1B998B");
  const paddleColor = useColorModeValue("#FC7A57", "#FCD757");

  const winImage = useColorModeValue(
    "/img/you-win-light.png",
    "/img/you-win-dark.png"
  );
  const lostImage = useColorModeValue(
    "/img/game-over-light.png",
    "/img/game-over-dark.png"
  );

  const [won, setWon] = useState<boolean>(false);
  const [lost, setLost] = useState<boolean>(false);

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (canvas.current !== null && canvas.current !== undefined && ctx) {
      const draw = () => {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        drawScore(ctx, primaryColor);
        drawLives(ctx, canvas?.current, primaryColor);
        drawPaddle(ctx, paddleX, paddleColor);
        drawBricks(ctx, primaryColor);
        drawBall(ctx, x, y, ballColor);
        collisionDetection();

        if (x + dx > CANVAS_WIDTH - BALL_RADIUS || x + dx < BALL_RADIUS) {
          dx = -dx;
        }
        if (y + dy < BALL_RADIUS) {
          dy = -dy;
        } else if (y + dy > CANVAS_HEIGHT - BALL_RADIUS) {
          if (x > paddleX && x < paddleX + PADDLE_WIDTH) {
            dy = -dy;
          } else {
            if (lives > 0) {
              lives--;
            }
            if (!lives) {
              setLost(true);
            } else {
              x = CANVAS_WIDTH / 2;
              y = CANVAS_HEIGHT - 30;
              dx = 3;
              dy = -3;
              paddleX = (CANVAS_WIDTH - PADDLE_WIDTH) / 2;
            }
          }
        }

        // Recursive call to draw the next frame indefinitely
        if (!won && !lost) {
          x += dx;
          y += dy;
          requestAnimationFrame(draw);
        } else {
          x = -20;
          y = -20;
          console.log("Ended");
          return false;
        }
      };
      draw();
    }
  }, [primaryColor, ballColor, paddleColor, lost, won]);

  const keyDownHandler = (e: any) => {
    if (e.key == "Right" || e.key == "ArrowRight") {
      if (paddleX < CANVAS_WIDTH - PADDLE_WIDTH) {
        paddleX = paddleX + 14;
      }
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
      if (paddleX > 0) {
        paddleX = paddleX - 14;
      }
    }
  };

  const mouseMoveHandler = (e: any) => {
    if (canvas.current !== undefined && canvas.current !== null) {
      var relativeX = e.clientX - canvas.current?.offsetLeft;
      if (relativeX > 0 && relativeX < CANVAS_WIDTH) {
        paddleX = relativeX - PADDLE_WIDTH / 2;
      }
    }
  };

  const collisionDetection = () => {
    for (var c = 0; c < brickColumnCount; c++) {
      for (var r = 0; r < brickRowCount; r++) {
        var b = bricks[c][r];
        if (b.status == 1) {
          if (
            x > b.x &&
            x < b.x + brickWidth &&
            y > b.y &&
            y < b.y + brickHeight
          ) {
            dy = -dy;
            b.status = 0;
            score++;
            if (score == brickRowCount * brickColumnCount) {
              setWon(true);
            }
          }
        }
      }
    }
  };

  return (
    <>
      {(won || lost) && (
        <Box
          w={CANVAS_WIDTH}
          h={CANVAS_HEIGHT}
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          style={{
            backgroundColor: `${won ? bgColorWinMessage : bgColorLostMessage}`,
            borderRadius: "10px",
          }}
        >
          {won && <Image w="50%" src={winImage} alt="You Win!"></Image>}
          {lost && <Image w="50%" src={lostImage} alt="Game Over!"></Image>}
        </Box>
      )}
      <StyledCanvas
        tabIndex={0}
        ref={canvas}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={{ backgroundColor: `${bgColor}` }}
        onKeyDown={keyDownHandler}
        onMouseMove={mouseMoveHandler}
      ></StyledCanvas>
    </>
  );
}

export default SkillsBlockBreaker;
