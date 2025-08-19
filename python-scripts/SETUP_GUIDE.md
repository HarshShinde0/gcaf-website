# Quick Setup Guide - Leaderboard Auto-Updater

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 2: Start Auto-Updater
```bash
# Option A: File watcher (recommended)
./start_watcher.sh

# Option B: One-time conversion
python convert_once.py
```

### Step 3: Update Your Data
1. Edit `data.csv` with new participant information
2. Save the file
3. The system automatically converts to `data.json`
4. Your leaderboard updates in real-time!

## 📁 What Each File Does

- **`data.csv`** ← **YOU UPDATE THIS** (add new participants, scores, etc.)
- **`data.json`** ← **AUTO-GENERATED** (powers your leaderboard)
- **`main.py`** ← File watcher that auto-updates JSON
- **`convert_once.py`** ← One-time conversion script
- **`start_watcher.sh`** ← Easy startup script

## 🔄 Workflow

1. **Edit CSV**: Update `data.csv` with new data
2. **Auto-Convert**: System detects changes and converts to JSON
3. **Real-time Update**: Leaderboard shows new data immediately
4. **GitHub Sync**: Push changes to update your live website

## 🛠️ Troubleshooting

- **"Module not found"**: Run `pip install -r requirements.txt`
- **Permission denied**: Run `chmod +x start_watcher.sh`
- **CSV not found**: Make sure `data.csv` is in the same folder

## 📊 Data Format

Your CSV must have these columns:
- User Name
- Access Code Redemption Status  
- # of Skill Badges Completed
- # of Arcade Games Completed
- # of Trivia Games Completed
- Milestone Earned

## 🎯 Pro Tips

- Keep the file watcher running while developing
- Use `convert_once.py` for quick one-time updates
- Check `updater.log` for any error messages
- The system sorts by skill badges completed automatically
