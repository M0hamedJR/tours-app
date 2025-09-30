const express = require("express");
const AppError = require("./utils/AppError");
const globalErrHandler = require("./controllers/errorController");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const tourRoter = require("./routes/tourRoutes");
const userRoter = require("./routes/userRoutes");
const reviewRoter = require("./routes/reviewRoutes");
const path = require('path')

const app = express();

app.set('view engine' , 'pug');
app.set('views', path.join(__dirname,'views'))

const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(helmet());

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "too many requests from this IP, please try in an hour",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "maxGroupSize",
      "difficulty",
      "price",
    ],
  })
);

app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log("Hello from my Mdlware");
  next();
});

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();

  next();
});


app.use('/', (req, res)=>{
  res.status(200).render('base')
})

app.use("/api/v1/tours", tourRoter);
app.use("/api/v1/users", userRoter);
app.use("/api/v1/reviews", reviewRoter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find this ${req.originalUrl} on server!!!`, 404));
});

app.use(globalErrHandler);

module.exports = app;
