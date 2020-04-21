import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";

export default class MockAPI extends Component {
    constructor(props) {
        super(props);

        this.state = {
            datas: [],
            address: "jakarta",
        };
    }

    componentDidMount = async () => {
        const url = "https://5e33d48de0161c00140ac4fe.mockapi.io/users";

        // fetching menggunakan async await
        const response = await fetch(url);
        const result = await response.json();

        // set state cara 1
        this.setState((prevState) => {
            return {
                ...prevState,
                datas: result,
                address: "bandung",
            };
        });

        // set state cara 2
        // this.setState({ datas: result });

        // fetching menggunkan promise
        // fetch(url)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((result) => {
        //         this.setState((prevState) => {
        //             return {
        //                 ...prevState,
        //                 datas: result,
        //             };
        //         });
        //     });
    };

    render() {
        return (
            <div>
                <h1>Halaman Mock API</h1>
                {this.state.datas.length > 0 ? (
                    this.state.datas.map((element) => {
                        return <div key={element.id}>{element.email}</div>;
                    })
                ) : (
                    <div style={{ width: "100px" }}>
                        <Skeleton count={20} />
                    </div>
                )}
            </div>
        );
    }
}