import express from 'express';
import ReactDOM from 'react-dom/server';
import { Header } from "../shared/Header";
import { indexTemplate } from "./indexTemplate";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./dist/client'))

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(Header())),
  )
})

app.listen(PORT, () => {
  console.log(`server started on post: ${PORT}`)
})
