import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT);
  })
  .catch(() => {
    // console.log('Connection with database generated an error:\r\n');
    // console.log(error);
    // console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });