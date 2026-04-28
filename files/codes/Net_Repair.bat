@echo off
title ASIF TECH GLOBAL - Network Repair
echo Resetting Network Settings...
netsh winsock reset
netsh int ip reset
ipconfig /release
ipconfig /renew
echo.
echo Network has been reset. Please restart your PC.
pause