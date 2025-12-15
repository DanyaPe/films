import "tailwindcss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default class App extends React.Component {
    state = {
        movieList: [],
    };

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
