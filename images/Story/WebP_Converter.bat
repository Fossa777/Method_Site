@echo off
setlocal

if not exist "webp" mkdir "webp"
if not exist "thumbs" mkdir "thumbs"

for %%i in (*.png *.jpg *.jpeg) do (
    magick "%%i" -quality 92 -define webp:method=6 "webp\%%~ni.webp"

)

for %%i in (*.gif) do (
    magick "%%i" -quality 82 -define webp:method=6 "webp\%%~ni.webp"
)

echo Done
pause