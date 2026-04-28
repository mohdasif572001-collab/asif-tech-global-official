Write-Host "--- ASIF TECH GLOBAL: PC OPTIMIZER ---" -ForegroundColor Cyan
Write-Host "Cleaning System Junk..." -ForegroundColor Yellow

# Clean Temp Folders
Remove-Item -Path $env:TEMP\* -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "C:\Windows\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue

# Flush DNS
ipconfig /flushdns

Write-Host "Done! Your PC is now faster." -ForegroundColor Green
pause