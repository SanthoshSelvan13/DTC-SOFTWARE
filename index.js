const express = require('express');
const driverRoutes = require('./routes/driver');
const conductorRoutes = require('./routes/conductor');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Handle CORS for frontend-backend communication
app.use('/api/driver', driverRoutes);
app.use('/api/conductor', conductorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
