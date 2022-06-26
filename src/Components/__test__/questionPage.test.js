import { render, cleanup, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "../../Store";
import QuestionPage from "../QuestionPage";

afterEach(() => {
  cleanup();
});
// const mockStore = createStore();

const TestQuestion = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<QuestionPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};
describe("Question", () => {
  it("should render and match snapshot", () => {
    const { container } = render(<TestQuestion />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
