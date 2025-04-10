from dotenv import load_dotenv
import os

load_dotenv()  # Loads environment variables from the .env file

db_url = os.getenv('DATABASE_URL')
api_key = os.getenv('API_KEY')

print(db_url, api_key)
