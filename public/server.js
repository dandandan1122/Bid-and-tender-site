// server.js
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/routes/index'); // adjust path if needed

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/routes')); 
app.use(express.static(path.join(__dirname, 'public/public'))); 

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
