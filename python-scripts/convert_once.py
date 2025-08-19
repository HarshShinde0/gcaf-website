#!/usr/bin/env python3
"""
Simple CSV to JSON converter for one-time use
Use this when you just want to convert once without file watching
"""

import pandas as pd
import json
import sys

def convert_csv_to_json():
    """Convert CSV data to JSON format once"""
    try:
        # Load the CSV file
        csv_path = 'data.csv'
        data = pd.read_csv(csv_path)
        print(f"Loaded CSV with {len(data)} rows")
        
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
        
        print(f"Successfully converted CSV to JSON. Saved {len(sorted_data)} records to data.json")
        return True
        
    except Exception as e:
        print(f"Error converting CSV to JSON: {str(e)}")
        return False

if __name__ == "__main__":
    print("Converting CSV to JSON...")
    if convert_csv_to_json():
        print("Conversion completed successfully!")
        sys.exit(0)
    else:
        print("Conversion failed!")
        sys.exit(1)
