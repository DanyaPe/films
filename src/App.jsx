import "./index.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { fetchResultList } from "./utils/fetchMovieList";

export default class App extends React.Component {
    FILTERS = [
        { id: "all", value: "Все" },
        { id: "movie", value: "Фильмы" },
        { id: "series", value: "Сериалы" },
    ];

    state = {
        isFirstRender: true,
        movieList: [],
        loading: false,
        filter: "all",
        title: "",
        page: 0,
        isEnd: false,
    };

    handleSearch = async (text) => {
        this.setState({ loading: true, isFirstRender: false });

        const isAnotherTitle = text !== this.state.title;
        const result = await fetchResultList(
            text,
            String(isAnotherTitle ? 1 : this.state.page + 1),
            this.state.filter
        );

        this.setState({
            movieList: (isAnotherTitle ? [] : this.state.movieList).concat(
                Array.from(
                    new Map(
                        result.map((movie) => [movie.imdbID, movie])
                    ).values()
                )
            ),
            page: isAnotherTitle ? 1 : this.state.page + 1,
            isEnd:
                result.length < (this.state.filter === "all" ? 20 : 10)
                    ? true
                    : false,
            title: text,
            loading: false,
        });
    };

    handleFilter = (filter) => {
        if (this.FILTERS.some((element) => element.id === filter)) {
            this.setState({ filter: filter });
        }
    };

    render() {
        return (
            <div className="min-w-full min-h-screen flex flex-col">
                <Header />
                <Main
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    filtersValue={this.FILTERS}
                    {...this.state}
                />
                <Footer />
            </div>
        );
    }
}
