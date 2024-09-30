import uvicorn
import logging
from app.app import app

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    logger.info("Starting the Casey webapp")
    uvicorn.run(app, host="0.0.0.0", port=8000)
    logger.info("Casey webapp is running")

