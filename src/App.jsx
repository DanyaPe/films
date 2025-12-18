import "./index.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { fetchResultList } from "./utils/fetchMovieList";

export default class App extends React.Component {
    state = {
        isFirstRender: true,
        movieList: [],
        loading: false,
        filter: "all",
    };

    handleSearch = async (text) => {
        this.setState({ loading: true, isFirstRender: false });

        const result = await fetchResultList(text);

        this.setState({
            movieList: Array.from(
                new Map(result.map((movie) => [movie.imdbID, movie])).values()
            ),
            loading: false,
        });
    };

    handleFilter = (filter) => {
        if (["all", "movie", "series"].includes(filter)) {
            this.setState({ filter: filter });
        }
    };

    render() {
        const { movieList, loading, filter, isFirstRender } = this.state;

        return (
            <div className="min-w-full min-h-screen flex flex-col">
                <Header />
                <Main
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    isFirstRender={isFirstRender}
                    movieList={movieList}
                    loading={loading}
                    filter={filter}
                />
                <Footer />
            </div>
        );
    }
}
