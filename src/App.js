import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import Logincomponent from "./Components/Logincomponent";
import QuestionList from "./Components/QuestionList";
import QuestionPage from "./Components/QuestionPage";
import NewPoll from "./Components/NewPoll";
import Leaderboard from "./Components/Leaderboard";
import Navbar from "./Components/Navbar";
import Auth from "./Components/Auth";
import "./App.css"

function App() {
  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Logincomponent />} />
          <Route element={<Auth />}>
            <Route element={<Navbar />}>
              <Route path="/" element={<QuestionList />} />
              <Route path="/:question_id" element={<QuestionPage />} />
              <Route path="/new" element={<NewPoll />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
   
  );
}

export default App;
