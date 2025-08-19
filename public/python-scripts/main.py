import pandas as pd

# Load the CSV file
csv_path = 'data.csv'
data = pd.read_csv(csv_path)

# Select ALL columns from the CSV file to include detailed information
selected_columns = data[['User Name', 'User Email', 'Google Cloud Skills Boost Profile URL', 
                         'Profile URL Status', 'Access Code Redemption Status', 'Milestone Earned',
                         '# of Skill Badges Completed', 'Names of Completed Skill Badges',
                         '# of Arcade Games Completed', 'Names of Completed Arcade Games',
                         '# of Trivia Games Completed', 'Names of Completed Trivia Games',
                         '# of Lab-free Courses Completed', 'Names of Completed Lab-free Courses']]

# Sort the data by the '# of Skill Badges Completed' column in descending order
sorted_data = selected_columns.sort_values(by='# of Skill Badges Completed', ascending=False)

# Convert the sorted data to JSON format
json_data = sorted_data.to_json(orient='records')

# Save the JSON data to a file
with open('data.json', 'w') as json_file:
    json_file.write(json_data)

print("Data successfully converted to JSON with all detailed fields!")
print(f"Total participants: {len(sorted_data)}")
print(f"Top performer: {sorted_data.iloc[0]['User Name']} with {sorted_data.iloc[0]['# of Skill Badges Completed']} skill badges")