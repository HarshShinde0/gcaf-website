@echo off
echo Starting CSV to JSON converter with file watching...
echo This will automatically update data.json whenever data.csv changes
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed. Please install Python 3.7+ first.
    pause
    exit /b 1
)

REM Check if requirements are installed
python -c "import pandas, watchdog" >nul 2>&1
if errorlevel 1 (
    echo Installing required packages...
    pip install -r requirements.txt
)

REM Start the watcher
echo Starting file watcher...
python main.py
pause
