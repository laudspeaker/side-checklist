import React from "react";
import "./App.css";
import "./Global.css";
import RouteComponent from "./Routes";
import { LaudspeakerProvider } from "@laudspeaker/react";

function App() {
  return (
    <LaudspeakerProvider
      apiKey="hVHfu34n7vLgDx8UxkH9pB2ht3TH5nwZF6rSJhfm"
      apiHost="https://staging-app.laudspeaker.com"
    >
      <RouteComponent />
    </LaudspeakerProvider>
  );
}

export default App;
