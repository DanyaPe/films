import "./index.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import fetchMovieList from "./utils/fetchMovieList";

export default class App extends React.Component {
    state = {
        movieList: [],
        loading: true,
    };

    async componentDidMount() {
        const result = await fetchMovieList("Star Wars");
        if (result && result.Response === "True")
            this.setState({ movieList: result.Search, loading: false });
    }

    render() {
        return (
            <div className="min-w-full min-h-screen flex flex-col">
                <Header />
                <Main
                    movieList={this.state.movieList}
                    loading={this.state.loading}
                />
                <Footer />
            </div>
        );
    }
}
