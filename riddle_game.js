const r = require("raylib");
const rd = require("./questions");

const setup = function () {
  const screen = {
    width: 800,
    height: 440,
    fps: 60,
  };

  const index = Math.floor(Math.random() * 6);
  const user = { input: "" };

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, "Puzzle");
  r.SetTargetFPS(screen.fps);

  const result = "";

  return { screen, index, user, result };
};

const getUserInput = function (user) {
  let charCode = r.GetCharPressed();
  const letter = String.fromCharCode(charCode);

  if (r.IsKeyPressed(r.KEY_BACKSPACE) && user.input.length > 0) {
    user.input = user.input.slice(0, -1);
  }

  // while (charCode > 0) {
  //   charCode = r.GetCharPressed();
  // }
  user.input += letter;

  return user.input;
};

const isCorrect = function (input, index) {
  const values =
    rd.riddels[index].ans[0] ||
    rd.riddels[index].ans[1] ||
    rd.riddels[index].ans[2];

  return input === values;
};

const drawText = function (index, user) {
  const input = getUserInput(user);

  // //and presed enter key then correct
  // if (isCorrect(input, index)) {
  //   const result = "correct `✅` ";
  //   //: "incorect `❌`";
  //   r.DrawText(result, 300, 300, 25, r.GREEN);
  // }

  r.DrawText(input, 100, 200, 25, r.BLACK);
  r.DrawText(rd.riddels[index].riddel, 100, 100, 25, r.RED);
};

const update = function (world) {
  // console.log(world)
  if (r.IsKeyPressed(r.KEY_ENTER)) {
    world.result = isCorrect(world.user.input, world.index)
      ? "correct `✅` "
      : "incorrect `❌` ";
    console.log(isCorrect(world.input, world.index));

    console.log(world.input);
  }
};

const draw = function (world) {
  r.BeginDrawing();

  r.ClearBackground(r.WHITE);

  drawText(world.index, world.user);
  r.DrawText(world.result, 300, 300, 25, r.GREEN);

  r.EndDrawing();
};

const loop = function (world) {
  while (!r.WindowShouldClose()) {
    draw(world);
    update(world);
  }
};

const teardown = function () {
  r.CloseWindow();
};

const main = function () {
  const world = setup();
  loop(world);
  teardown();
};

main();
