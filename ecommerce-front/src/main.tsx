import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "@routes/AppRouter";
import "@styles/global.css";
import { Provider } from "react-redux";
import { store, persister } from "@store/index";

import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading application...</div>}
      persistor={persister}
    >
      <AppRouter />
    </PersistGate>
  </Provider>
);
