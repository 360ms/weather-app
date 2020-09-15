import React, {useState} from 'react'
import './index.scss'
import { Info } from "./components/Info"
import { Form } from "./components/Form";
import { Results } from "./components/Results";

const App = () => {
    const [temp, setTemp]                   = useState( null )
    const [tempFeelsLike, setTempFeelsLike] = useState( null )
    const [minTemp, setMinTemp]             = useState( null )
    const [maxTemp, setMaxTemp]             = useState( null )

    const [humidity, setHumidity]           = useState( null )
    const [weather, setWeather]             = useState( null )
    const [weatherIcon, setWeatherIcon]     = useState( null )
    const [wind, setWind]                   = useState( null )

    const [city, setCity]                   = useState( null )
    const [country, setCountry]             = useState( null )

    const[error, setError]                  = useState( null )

    const [loader, setLoader]               = useState( false )


    const onSubmitForm = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value
        setLoader(true)

        if(city) {
            // const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=en` )
            const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=en` )
            const data     = await response.json()

            try {
                setTemp          ( data.main.temp )
                setTempFeelsLike ( data.main.feels_like )
                setMinTemp       ( data.main.temp_min )
                setMaxTemp       ( data.main.temp_max )
                setHumidity      ( data.main.humidity )
                setWeather       ( data.weather[0].description )
                setWeatherIcon   ( data.weather[0].icon )
                setWind          ( data.wind.speed )
                setCity          ( data.name )
                setCountry       ( data.sys.country )

                setError         ( null )

                setLoader(false)
            } catch(e) {
                setError('Search error')
            }
        } else {
            setLoader( true )
        }
    }

    return (
        <div className='weather'>
            <Info/>

            <Form onSubmit={ onSubmitForm } />

            <Results
                temp          = { temp }
                tempFeelsLike = { tempFeelsLike }
                minTemp       = { minTemp }
                maxTemp       = { maxTemp }
                humidity      = { humidity }
                weather       = { weather }
                weatherIcon   = { weatherIcon }
                wind          = { wind }
                city          = { city }
                country       = { country }
                error         = { error }

                loader        = { loader }
            />
        </div>
    )
}

export default App;
