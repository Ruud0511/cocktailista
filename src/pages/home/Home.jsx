import './Home.css'
import Product from "../../components/Product.jsx";
import citroenen from "../../assets/citroenen.jpeg";
import cocktail from "../../assets/cocktail.jpeg"
import React from "react";
import SearchBar from "../../components/searchBar/SearchBar.jsx";

function Home () {
    return (
        <>
            <main className="main">
                <h1>Vind je cocktail!</h1>
                <SearchBar/>
            </main>
            <main>
                <Product
                    image={citroenen}
                    title="Zuur & inspiratieloos? Laat je inspireren!"
                />
                <Product
                    image={cocktail}
                />
            </main>
        </>
    )
}

export default Home;