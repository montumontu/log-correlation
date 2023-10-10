const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;
const rTracer = require("cls-rtracer");
app.use(rTracer.expressMiddleware({
  useHeader: true,
  headerName: "X-Correlation-ID"
}));
app.use(cors());
app.use(express.json());
app.use("/", require("./routes"));
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
