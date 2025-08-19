# Automated CSV to JSON Converter

This directory contains scripts to automatically convert your `data.csv` file to `data.json` format, which powers the leaderboard on your website.

## How It Works

1. **File Watching**: The Python script watches for changes in `data.csv`
2. **Automatic Conversion**: When `data.csv` is modified, it automatically converts to `data.json`
3. **Real-time Updates**: Your leaderboard at `http://localhost:3001/leaderboard` will reflect changes immediately

## Setup Instructions

### Prerequisites
- Python 3.7 or higher
- pip (Python package installer)

### Installation

1. **Install required packages**:
   ```bash
   pip install -r requirements.txt
   ```

   Or if you're using Python 3 specifically:
   ```bash
   pip3 install -r requirements.txt
   ```

### Usage

#### Option 1: Start the File Watcher (Recommended)
This will continuously watch for changes and update automatically:

**On Linux/Mac:**
```bash
./start_watcher.sh
```

**On Windows:**
```cmd
start_watcher.bat
```

#### Option 2: Manual Conversion
If you only want to convert once:

```bash
python main.py
```
(Press Ctrl+C to stop after conversion)

#### Option 3: Run the Script Directly
```bash
python3 main.py
```

## What Happens When You Update data.csv

1. The script detects the file change
2. Automatically converts CSV to JSON format
3. Sorts data by skill badges completed (descending)
4. Saves to `data.json`
5. Your React app automatically loads the new data
6. Leaderboard updates in real-time

## File Structure

- `main.py` - Main conversion script with file watching
- `requirements.txt` - Python package dependencies
- `start_watcher.sh` - Linux/Mac startup script
- `start_watcher.bat` - Windows startup script
- `data.csv` - Your source data file
- `data.json` - Generated JSON file (auto-updated)
- `updater.log` - Log file showing conversion history

## Troubleshooting

### Common Issues

1. **"Module not found" error**:
   - Run: `pip install -r requirements.txt`

2. **Permission denied on Linux/Mac**:
   - Run: `chmod +x start_watcher.sh`

3. **CSV file not found**:
   - Make sure `data.csv` is in the same directory as `main.py`

4. **JSON not updating**:
   - Check the console output for error messages
   - Verify `data.csv` has the correct column names

### Logs

Check `updater.log` for detailed information about conversions and any errors.

## Workflow for GitHub

1. Update your `data.csv` file
2. Commit and push to GitHub
3. The file watcher will automatically detect changes
4. `data.json` gets updated
5. Your deployed website shows the new leaderboard data

## Stopping the Watcher

Press `Ctrl+C` in the terminal where the script is running to stop the file watcher.
