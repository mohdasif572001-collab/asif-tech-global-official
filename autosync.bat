@echo off
title Asif Tech - Live Auto Sync
color 0A

:: 👇 Ye line batayegi ki folder kahan hai (Double-click fix)
cd /d "%~dp0"

echo ===================================================
echo   ASIF TECH GLOBAL - BACKGROUND AUTO-SYNC ACTIVE
echo ===================================================
echo Is black window ko minimize kar do.
echo Ab aap jab bhi 'files' folder mein koi file daloge,
echo ye har 60 seconds mein khud code likhkar website par live kar dega!
echo ===================================================
echo.

:loop
echo Checking for new files...
py auto_upload.py
echo.
echo [✅ Synced] Waiting for 60 seconds...
timeout /t 60 > NUL
goto loop