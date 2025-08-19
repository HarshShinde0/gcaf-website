#!/bin/bash

echo "Starting CSV to JSON converter with file watching..."
echo "This will automatically update data.json whenever data.csv changes"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "Python3 is not installed. Please install Python 3.7+ first."
    exit 1
fi

# Check if requirements are installed
if ! python3 -c "import pandas, watchdog" &> /dev/null; then
    echo "Installing required packages..."
    pip3 install -r requirements.txt
fi

# Start the watcher
echo "Starting file watcher..."
python3 main.py
