import requests
from bs4 import BeautifulSoup
import pandas as pd

# URL of the webpage to scrape
url = 'https://x.com/sreecharandesu'

# Send an HTTP request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find all tables on the webpage
    tables = soup.find_all('table')

    # Loop through each table and extract data
    for i, table in enumerate(tables):
        # Extract table headers
        headers = [header.get_text(strip=True) for header in table.find_all('th')]
        
        # Extract table rows
        rows = []
        for row in table.find_all('tr'):
            cells = [cell.get_text(strip=True) for cell in row.find_all('td')]
            if cells:
                rows.append(cells)

        # Create a DataFrame to organize the table data
        df = pd.DataFrame(rows, columns=headers)

        # Save the table data to a CSV file
        df.to_csv(f'table_{i}.csv', index=False)
    
    print('Tables have been successfully scraped and saved to CSV files.')

else:
    print(f'Failed to retrieve the webpage. Status code: {response.status_code}')
