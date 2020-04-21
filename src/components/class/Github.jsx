import React, { Component } from "react";

export default class Github extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            name: "Miftah",
        };
    }

    componentDidMount = () => {
        const url = "https://api.github.com/users/erfannr";

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        data: result,
                    };
                });
            });
    };

    render() {
        return (
            <div>
                <h1>Halaman Github</h1>
                <p>
                    {this.state.data.login === undefined
                        ? "loading"
                        : this.state.data.login}
                </p>
            </div>
        );
    }
}