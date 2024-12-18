// // import cors from 'cors';
// // import express, { Application } from 'express';
// // import morgan from 'morgan';
// // import rootRouter from './routes';
// // import notFound from './middlewares/notFound';
// // import globalErrorHandler from './middlewares/globalErrorhandler';

// // const app: Application = express();

// // app.use(express.json());
// // app.use(morgan('dev'));

// // app.use(cors({ origin: ['http://localhost:5173', 'https://inventory-navy.vercel.app'] }));


// // // application routes
// // app.use('/api/v1', rootRouter);

// // app.use(globalErrorHandler);

// // app.use(notFound);

// // export default app;


// import express, { Application } from 'express';
// import cors from 'cors';
// import morgan from 'morgan';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
// import rootRouter from './routes'; // Adjust path to your router file
// import notFound from './middlewares/notFound';
// import globalErrorHandler from './middlewares/globalErrorHandler';

// // Load environment variables
// dotenv.config({ path: path.join(process.cwd(), '.env') });

// // Configuration
// const PORT = process.env.PORT || 5000;
// const DATABASE_URL = process.env.DATABASE_URL || '';

// const app: Application = express();

// // Middleware
// app.use(express.json());
// app.use(morgan('dev'));
// app.use(cors()); // Enable CORS for all origins, customize if needed

// // Routes
// app.use('/api/v1', rootRouter); // Adjust base route if necessary

// // Global error handling middleware
// app.use(globalErrorHandler);

// // Handle 404 errors
// app.use(notFound);

// // Start the server and connect to the database
// const startServer = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');

//     // Start Express server
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit process if database connection fails
//   }
// };

// startServer();

// export default app;
import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
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

// Handle 404 errors
app.use(notFound);
console.log("Hello1")

// Start the server and connect to the database
// const startServer = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(DATABASE_URL); // No need for options in Mongoose 6+
//     console.log('Connected to MongoDB');

//     // Start Express server
//     app.listen(PORT, () => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit process if database connection fails
//   }
// };

// // startServer();

export default app;
