import React from "react";

export default function Countries() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const url = "https://restcountries.eu/rest/v2/all";

        // menggunakan async await
        const fetching = async () => {
            const response = await fetch(url);
            const result = await response.json();

            setData(result);
        };

        fetching();

        // resolve menggunakan promise
        // fetch(url)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((result) => {
        //         setData(result);
        //     });
    }, []);

    return (
        <div>
            <h1>Halaman Countries API</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                {data.map((element) => {
                    return (
                        <div key={element.alpha2Code}>
                            <div style={{ maxWidth: "200px" }}>
                                <img
                                    src={element.flag}
                                    alt={element.name}
                                    style={{ maxWidth: "100%" }}
                                />
                            </div>
                            <div>
                                <p>{element.name}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}