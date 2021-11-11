import React  from "react";
import {GoogleApiWrapper, Map} from 'google-maps-react';
import { useState, useEffect } from 'react';

export const MapContainer = (props) =>{
    const [map, setMap] = useState(null);
    const { google, query } = props;

    useEffect(() => {
        if(query) {
            searchbyQuery(query);
        }
    }, [query]);

    function searchbyQuery() {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
    };
    service.textSearch(request, (results, status) => {
        if(status === google.maps.places.PlacesServiceStatus.ok){
            console.log('restaurantes>>>', results);
        }
    });
};

   function searchNearby (map, center)  {

        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };
        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.ok){
                console.log('restaurantes>>>', results);
            }
        });
    };

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center);


    }

    return <Map google={google} centerAroundCurrentLocation  onReady={onMapReady}/>
};


export default GoogleApiWrapper({
    apikey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);