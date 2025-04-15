@echo off
echo Starting Semantic Product Search App...
echo.

REM Check if the data directory exists, create it if not
if not exist "server\data" (
  echo Creating data directory...
  mkdir "server\data"
)

REM Check if prompt_history.jsonl exists, create it if not
if not exist "server\data\prompt_history.jsonl" (
  echo Creating empty prompt_history.jsonl file...
  type nul > "server\data\prompt_history.jsonl"
)

echo.
echo Starting backend server...
start cmd /k "cd server && npm run safe-dev"

REM Wait for the server to start
timeout /t 5 /nobreak

echo.
echo Starting frontend client...
start cmd /k "cd client && npm start"

echo.
echo App started successfully!
echo.
echo Backend: http://localhost:5001
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit this window...
pause > nul
