import React from 'react';

export const Results = ({loader, temp, tempFeelsLike, minTemp, maxTemp, humidity, weather, wind, city, country, weatherIcon, error}) => {
    return (
        <>
            {
                loader ?
                    <div className='loader'>
                        <div className="lds-ripple"><div/><div/></div>
                    </div>
                    :
                    temp && <div className='results'>
                        <p className='weather__icon'>
                            <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt={weatherIcon} />
                        </p>
                        <span className='city'>{city} <span>{country}</span></span>
                        <span className="temp">
                            <p className='min_max_temp'>
                                {
                                    minTemp !== maxTemp ? 'Temperature: ' + minTemp + '℃ - ' + maxTemp + '℃' : null
                                }
                            </p>
                            <p className='temp_now'>{temp}℃</p>
                            <p className='feels_like'>Feels like: {tempFeelsLike}℃</p>
                        </span>
                        <span className='wind'>
                            <p>Weather: {weather.toUpperCase()}</p>
                            <p>Humidity: {humidity}%</p>
                            <p>Wind speed: {wind} m/s</p>
                        </span>
                    </div>
            }

            { error ? <p style={{color: '#fff', textAlign: 'center', fontSize: 24}}>{error}</p> : null }
        </>
    )
}