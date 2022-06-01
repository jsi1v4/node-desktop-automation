import robot from "robotjs";

function startMouseClick(width, height, milliseconds) {
  const w = Math.floor(Math.random() * width);
  const h = Math.floor(Math.random() * height);

  setTimeout(() => {
    robot.moveMouseSmooth(w, h);
    if (milliseconds) {
      startMouseClick(width, height, milliseconds);
    }
  }, milliseconds);
}

function main() {
  const timeout = Number(process.argv[2]);
  const { width, height } = robot.getScreenSize();

  startMouseClick(width, height, timeout);
}

main();
