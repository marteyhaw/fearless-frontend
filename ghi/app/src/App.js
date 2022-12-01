import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendeeForm from "./AttendeeForm";
import PresentationForm from "./PresentationForm";
import MainPage from "./MainPage";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="conferences">
          <Route path="new" element={<ConferenceForm />} />
        </Route>
        <Route path="locations">
          <Route path="new" element={<LocationForm />} />
        </Route>
        <Route path="presentations">
          <Route path="new" element={<PresentationForm />} />
        </Route>
        <Route path="attendees">
          <Route
            path=""
            element={<AttendeesList attendees={props.attendees} />}
          />
          <Route path="new" element={<AttendeeForm />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
