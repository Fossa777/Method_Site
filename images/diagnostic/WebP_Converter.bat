@echo off
setlocal

if not exist "webp" mkdir "webp"
if not exist "thumbs" mkdir "thumbs"

for %%i in (*.png) do (
    magick "%%i" -quality 92 -define webp:method=6 "webp\%%~ni.webp"
    magick "%%i" -resize 800x -quality 82 -define webp:method=6 "thumbs\%%~ni.webp"
)

echo Done
pause