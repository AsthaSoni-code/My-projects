const r = require("raylib");

r.InitWindow(800, 400, "Raylib");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawRectangle(60, 60, 500, 100, r.RED);
  r.EndDrawing();
}
localStorage;
