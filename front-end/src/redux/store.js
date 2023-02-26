import { configureStore } from "@reduxjs/toolkit"; //create react app redux toolkit
import appReducer from "./app.slice"; //import our reducer from step 4
export default configureStore({
  reducer: {
    app: appReducer, //add our reducer from step 4
  },
});
