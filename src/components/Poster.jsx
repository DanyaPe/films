import "../index.css";
import React from "react";

export default class Poster extends React.Component {
    state = {
        poster: this.props.poster,
    };

    render() {
        return (
            <img
                src={
                    this.state.poster == "N/A"
                        ? "/place_hold_pic.png"
                        : this.state.poster
                }
                alt="Poster"
                className="h-83/100 w-93/100 self-center overflow-hidden"
                onError={() =>
                    this.setState({
                        poster: "/place_hold_pic.png",
                    })
                }
            />
        );
    }
}
