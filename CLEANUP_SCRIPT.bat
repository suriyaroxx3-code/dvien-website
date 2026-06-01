@echo off
REM ═══════════════════════════════════════════════════════════════════════════
REM  DVein Assets Cleanup Script
REM ═══════════════════════════════════════════════════════════════════════════

echo.
echo Cleaning up duplicate/incorrect image files...
echo.

REM Remove the duplicate kaviya.jpeg.jpeg file
if exist "frontend\src\assets\kaviya.jpeg.jpeg" (
    del "frontend\src\assets\kaviya.jpeg.jpeg"
    echo ✓ Removed: kaviya.jpeg.jpeg (duplicate)
) else (
    echo ✓ kaviya.jpeg.jpeg not found (already clean)
)

echo.
echo ═══════════════════════════════════════════════════════════════════════════
echo Cleanup complete!
echo.
echo Next steps:
echo 1. Run: npm install (if needed)
echo 2. Run: npm run dev
echo 3. Open: http://localhost:5173
echo 4. Check: "Meet the Crew" section
echo.
echo ═══════════════════════════════════════════════════════════════════════════
pause
