const express = require('express');
const userRoutes = require('./Routes/UserRoutes.js');
const OrganizationRoutes = require('./Routes/OrganizationRoutes.js');
const QuestionRoutes = require('./Routes/QuestionRoutes.js');
const AssignmentRoutes = require('./Routes/AssignmentRoutes.js');
const TemplateRoutes = require('./Routes/TemplateRoutes.js');
const path = require('path');
const connectDB = require('./db/connectDB.js');

const app = express();
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/user', userRoutes);
app.use('/organization', OrganizationRoutes); 
app.use('/question', QuestionRoutes);
app.use('/assignment', AssignmentRoutes);
app.use('/template', TemplateRoutes);


// expose the port to listen to the app 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});