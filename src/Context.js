import React, { useState, useContext, useEffect } from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}=${searchTerm}`)
      const data = await response.json()
      const { drinks } = data;
      if (drinks) {
        const newcocktail = drinks.map((item) => {
          const { idDrink, strDrink, strCategory, strGlass, strAlcoholic,strDrinkThumb } = item;
          return { 
                id: idDrink,
                name: strDrink,
                image:strDrinkThumb,
                category: strCategory,
                glass: strGlass, 
              
                Alcholic: strAlcoholic
              
              }

        })
        setCocktails(newcocktail)
      }

      else {
        setCocktails([]);

      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);

    }

  }
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )


}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
