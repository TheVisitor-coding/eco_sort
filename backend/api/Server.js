const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const AuthenticateDatabase = require("./src/config/DbConnexion");

dotenv.config({ path: "config.env" });

// Appeler la fonction
AuthenticateDatabase()

// express App
const App = express();

//Middlewares
App.use(express.json());


if (process.env.NODE_ENV === "development") {
    App.use(morgan("dev"));
    console.log(`node : ${process.env.NODE_ENV}`);
  }




  const PORT = process.env.PORT || 8000;
  const server = App.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
  
  // Handle rejection outside express
  process.on("unhandledRejection", (err) => {
    console.error(`UNHANDLED REJECTION! ${err.name} | ${err.message}`);
    server.close(() => {
      console.error("Shutting down...");
      process.exit(1);
    });
  });
