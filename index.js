const express = require('express');
const app = express();
app.use(express.json())

const port = 8080;

const myRouter = require('./Router/useRouter');
app.use('/api', myRouter);
 app.use(express.static(__dirname+'view'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});