import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";


export default function NasaApi() {
    const [planet, setPlanet] = useState([]);


    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                const planet = response.data;
                console.log("As The World Turns", planet);
                setPlanet(planet)
            })
            .catch(error => {
                console.log("The planet was not returned", error);
            });
    }, []);

    return (
        <div>
            <NasaCard
                url={planet.url}
                title={planet.title}
                date={planet.date}
                copyright={planet.copyright}
                explanation={planet.explanation}
            />
        </div>
    )
};

//older way 
//img css is in index css 
//     <div>
//     <h3>{planet.title}</h3>
//     <img className="planet-img" alt="planet" style={{width:'100%'}} src={planet.url} />
//     <h5>Copyright: {planet.copyright}</h5>
//     <p>Explanation: {planet.explanation}</p>
//     <p>Date: {planet.date}</p>
//     </div>
//  )
// };

