@echo off
title Alpha Cinema - Startup Script
color 0B

echo =======================================================
echo          ALPHA CINEMA - PREMIUM MOVIE BOOKING          
echo =======================================================
echo.

echo [1/3] Kiem tra va cai dat thu vien Frontend (Neu can)...
cd frontend
call npm install
cd ..
echo.

echo [2/3] Khoi dong Backend (.NET 8)...
cd backend\src\AlphaCinema.API
start "Alpha Cinema - Backend (.NET)" cmd /c "title Alpha Cinema - Backend && color 0A && echo Dang chay Backend... && dotnet run"
cd ..\..\..
echo.

echo [3/3] Khoi dong Frontend (Vue.js 3)...
cd frontend
start "Alpha Cinema - Frontend (Vue)" cmd /c "title Alpha Cinema - Frontend && color 0D && echo Dang chay Frontend... && npm run dev"
cd ..

echo.
echo =======================================================
echo [Thanh Cong] He thong dang duoc khoi chay!
echo Backend va Frontend se chay tren 2 cua so rieng biet.
echo.
echo URL mac dinh:
echo - Frontend: http://localhost:5173
echo - Backend API: http://localhost:5000 (hoac 5233/7104)
echo.
echo Ban co the dong cua so nay bay gio.
echo =======================================================
pause >nul

