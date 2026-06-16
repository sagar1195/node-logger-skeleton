import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startSever = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startSever();
