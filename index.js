const express = require('express');
const app = express();
const ejs = require('ejs');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static("public"))
// Route for the root URL
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, EJS!' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const userRouter = require("./routes/users")

app.use('/users',userRouter)