import "./App.css";
import { RandomCheese } from "../randomCheese/RandomCheese";
import SignUpForm from "../user/SignUpForm";
import NavigationBar from "../navigation/Navigation";
import IndividualCheese from "../individualCheese/IndividualCheese";
import CheeseList from "../cheeseList/CheeseList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, Routes, Route } from "react-router-dom";
import RecommendationComponent from "../recommendation/Recommendation";

const theme = createTheme({
    palette: {
        primary: {
            main: "#fad02d",
        },
    },
});

const themeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffab00",
            contrastText: "#ff6f00",
        },
        secondary: {
            main: "#f50057",
        },
    },
});

themeOptions.typography.h1 = {
    fontSize: "50px",
};

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavigationBar />
                <Routes>
                    <Route
                        path="/"
                        element={<RandomCheese navigate={useNavigate()} />}
                    />
                    {/* <Route
                        path="/login"
                        element={<LoginForm navigate={useNavigate()} />}
                    /> */}
                    <Route
                        path="/signup"
                        element={<SignUpForm navigate={useNavigate()} />}
                    />
                    <Route path="/cheeses/:id" element={<IndividualCheese />} />
                    <Route
                        path="/cheeses/type/:type"
                        element={<CheeseList />}
                    />
                    <Route
                        path="/recommendation"
                        element={<RecommendationComponent />}
                    />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
