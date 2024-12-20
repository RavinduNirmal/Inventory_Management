// export default app;
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import rootRouter from './routes'; // Adjust path to your router file
import notFound from './middlewares/notFound';
// import globalErrorHandler from './middlewares/globalErrorHandler';

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), '.env') });

const app: Application = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors()); // Enable CORS for all origins, customize if needed

// Routes
app.use('/api/v1', rootRouter); // Adjust base route if necessary

// Global error handling middleware
// app.use(globalErrorHandler);

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
// Handle 404 errors
app.use(notFound);

export default app;
