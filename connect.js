import mongoose from "mongoose";

export const connect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("MongDB has been connected!");
    })
    .catch((error) => {
      throw error;
    });
};
