import uvicorn
import logging
from app.app import app

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    logger.info("Starting the Casey webapp")
    # Change this line to use the import string format
    uvicorn.run("app.app:app", host="0.0.0.0", port=8000, reload=True)
    logger.info("Casey webapp is running")

