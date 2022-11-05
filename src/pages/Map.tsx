import React from 'react';
import {
    Box,
    SkeletonText,
  } from '@chakra-ui/react'
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api";
import Headbar from '../components/Headbar';

const center = {lat: 46.770439, lng: 23.591423};
const qPerior = {lat: 46.78301960702481, lng: 23.60788872562041}; 
const bisericaPiarista = {lat: 46.7679533986215, lng: 23.59060328514601};
const formCafe = {lat: 46.772425327918256, lng: 23.587449398637546};
const theGuildHall = {lat: 46.76887309015825, lng: 23.586278998637408};

function Map() {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyAyeIl49luu-6PIo-YN3aoqqoBLrNID1dE",
    });

    if(!isLoaded) {
        <SkeletonText/>
    }

    return (
        <>
        <Headbar></Headbar>
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
            {}
            <GoogleMap center={center} zoom={14} mapContainerStyle={{width: "100%", height: "100%"}} options={{
                zoomControl: false,
                fullscreenControl: false,
            }}>
            <Marker position={qPerior} />
            <Marker position={bisericaPiarista} />
            <Marker position={formCafe} />
            <Marker position={theGuildHall} />
            </GoogleMap>
        </Box>
        </>

    );
}

export default Map;