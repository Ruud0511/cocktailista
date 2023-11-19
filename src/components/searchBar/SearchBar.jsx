import './SearchBar.css';
import React, { useState } from 'react';
import axios from 'axios';

function CocktailSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
            );
            setCocktails(response.data.drinks || []);
            setError(null);
        } catch (err) {
            setError('Er is geen cocktail gevonden.');
            setCocktails([]);
        }
    };

    return (
        <div>
            <input className="search-input"
                type="text"
                placeholder="Zoek op ingrediënt, glas, drank of categorie"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>Zoek</button>

            {error && <p>{error}</p>}

            {cocktails.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    {cocktails.map((cocktail) => (
                        <div key={cocktail.idDrink}>
                            <h3>{cocktail.strDrink}</h3>
                            <p>{cocktail.strInstructions}</p>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} width="100" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CocktailSearch;