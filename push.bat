@echo off
setlocal
echo ===================================================
echo   Ian Nelson Portfolio - Push to GitHub
echo ===================================================
echo.

set "PATH=C:\Program Files\Git\cmd;C:\Program Files\GitHub CLI;%PATH%"

cd /d "%~dp0"

echo [1/3] Adding changes...
git add .

echo [2/3] Committing changes...
set /p commit_msg="Enter commit message (or press ENTER for default): "
if "%commit_msg%"=="" set commit_msg="Update portfolio website"

git commit -m "%commit_msg%"

echo [3/3] Pushing to GitHub...
git push origin main

echo.
echo ===================================================
echo   Done! Your updates are live on GitHub.
echo ===================================================
pause
