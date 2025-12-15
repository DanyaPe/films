import "tailwindcss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import fetchMovieList from "./utils/fetchMovieList";

export default class App extends React.Component {
    state = {
        movieList: [],
    };

    async componentDidMount() {
        const result = await fetchMovieList("Star Wars");
        if (result && result.Response === "True")
            this.setState({ movieList: result.Search });
    }

    render() {
        return (
            <div className="min-w-full min-h-screen flex flex-col">
                <Header />

                <Main movieList={this.state.movieList} />

                <Footer />
            </div>
        );
    }
}
