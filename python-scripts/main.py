import pandas as pd
import time
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import logging
from datetime import datetime

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(message)s',
    handlers=[
        logging.FileHandler('updater.log'),
        logging.StreamHandler()
    ]
)

def convert_csv_to_json():
    """Convert CSV data to JSON format"""
    try:
        # Load the CSV file
        csv_path = 'data.csv'
        if not os.path.exists(csv_path):
            logging.error(f"CSV file not found: {csv_path}")
            return False
            
        data = pd.read_csv(csv_path)
        logging.info(f"Loaded CSV with {len(data)} rows")
        
        # Select the specific columns present in the CSV file
        selected_columns = data[['User Name', 'Access Code Redemption Status', '# of Skill Badges Completed', 
                               '# of Arcade Games Completed', '# of Trivia Games Completed', 'Milestone Earned']]
        
        # Sort the data by the '# of Skill Badges Completed' column in descending order
        sorted_data = selected_columns.sort_values(by='# of Skill Badges Completed', ascending=False)
        
        # Convert the sorted data to JSON format
        json_data = sorted_data.to_json(orient='records', indent=2)
        
        # Save the JSON data to a file
        with open('data.json', 'w') as json_file:
            json_file.write(json_data)
        
        logging.info(f"Successfully converted CSV to JSON. Saved {len(sorted_data)} records to data.json")
        return True
        
    except Exception as e:
        logging.error(f"Error converting CSV to JSON: {str(e)}")
        return False

class CSVHandler(FileSystemEventHandler):
    """Handler for CSV file changes"""
    
    def on_modified(self, event):
        if event.is_directory:
            return
        if event.src_path.endswith('data.csv'):
            logging.info(f"CSV file modified: {event.src_path}")
            time.sleep(1)  # Wait a bit for file to be fully written
            if convert_csv_to_json():
                logging.info("Leaderboard data updated successfully!")
            else:
                logging.error("Failed to update leaderboard data")

def watch_csv_file():
    """Watch for changes in the CSV file"""
    event_handler = CSVHandler()
    observer = Observer()
    observer.schedule(event_handler, path='.', recursive=False)
    observer.start()
    
    logging.info("Starting CSV file watcher...")
    logging.info("Watching for changes in data.csv")
    logging.info("Press Ctrl+C to stop")
    
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
        logging.info("Stopping CSV file watcher...")
    
    observer.join()

if __name__ == "__main__":
    # Initial conversion
    logging.info("Performing initial CSV to JSON conversion...")
    if convert_csv_to_json():
        logging.info("Initial conversion completed successfully!")
    else:
        logging.error("Initial conversion failed!")
    
    # Start watching for changes
    watch_csv_file()