import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import WarningIcon from "@material-ui/icons/Warning";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

export const NAVIGATION = [
    {
        id: 0,
        uri: "destinations",
        name: "Destinace",
        icon: <SearchIcon/>
    },
    {
        id: 1,
        uri: "places",
        name: "Cíle",
        icon: <LocationCityIcon/>
    },
    {
        id: 2,
        uri: "info",
        name: "Info",
        icon: <WarningIcon/>
    },
    {
        id: 3,
        uri: "paths",
        name: "Cesty",
        icon: <TrendingUpIcon/>
    }
];

export const PRAGUE_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27680.46413497188!2d14.393695493240752!3d50.0854831768345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e91381d33f%3A0x2600af105c240cf2!2sPraha%201!5e1!3m2!1scs!2scz!4v1610041867231!5m2!1scs!2scz";

export const SortBy = {
    DISTANCE: 'DISTANCE',
    RATING: 'RATING'
}

export const PriceRange = {
    LOW_PRICE: 'LOW_PRICE',
    MEDIUM_PRICE: 'MEDIUM_PRICE',
    HIGH_PRICE: 'HIGH_PRICE',
    VERY_HIGH_PRICE: 'VERY_HIGH_PRICE'
}

export const FoodCategories = {ASIA: 'ASIA', AMERICA: 'AMERICA', ITALY: 'ITALY', FASTFOOD: 'FASTFOOD', GOODIES: 'GOODIES', MEXICO: 'MEXICO', VEGAN: 'VEGAN', LOCAL: 'LOCAL'}
export const SightsCategories = {HISTORIC: 'HISTORIC', MODERN: 'MODERN'}
export const NatureCategories = {PARK: 'PARK', FOREST: 'FOREST', HILLS: 'HILLS'}
export const CultureCategories = {THEATRE: 'THEATRE', CINEMA: 'CINEMA', GALLERY: 'GALLERY'}
export const SportCategories = {GYM: 'GYM'}

export const PlaceCategory = {
    FOOD: {
        value: 'FOOD',
        subs: FoodCategories
    },
    COFFEE: {
        value: 'COFFEE',
        subs: {}
    },
    SIGHTS: {
        value: 'SIGHTS',
        subs: SightsCategories
    },
    NATURE: {
        value: 'NATURE',
        subs: NatureCategories
    },
    CULTURE: {
        value: 'CULTURE',
        subs: CultureCategories
    },
    SPORT: {
        value: 'SPORT',
        subs: SportCategories
    },
    PARTY: {
        value: 'PARTY',
        subs: {}
    },
    OTHER: {
        value: 'OTHER',
        subs: {}
    }
}

export const Translate = {
    RELEVANCE: 'Relevance',
    DISTANCE: 'Vzdálenosti',
    RATING: 'Hodnocení',
    LOW_PRICE: '€',
    MEDIUM_PRICE: '€€',
    HIGH_PRICE: '€€€',
    VERY_HIGH_PRICE: '€€€€',
    FOOD: 'Jídlo',
    COFFEE: 'Čaj, Káva',
    SIGHTS: 'Památky',
    NATURE: 'Příroda',
    CULTURE: 'Kultura',
    SPORT: 'Sport',
    PARTY: 'Párty',
    OTHER: 'Ostatní',
    ASIA: 'Asie',
    AMERICA: 'Amerika',
    ITALY: 'Itálie',
    FASTFOOD: 'Fastfood',
    GOODIES: 'Dobrůtky',
    MEXICO: 'Mexiko',
    VEGAN: 'Vegan',
    LOCAL: 'Lokální',
    HISTORIC: 'Historické',
    MODERN: 'Moderní',
    PARK: 'Parky',
    FOREST: 'Les',
    HILLS: 'Hory',
    THEATRE: 'Divadlo',
    CINEMA: 'Kino',
    GALLERY: 'Galerie',
    GYM: 'Fitko',
}

export const PriceToString = {
    LOW_PRICE: 'Nízká',
    MEDIUM_PRICE: 'Střední',
    HIGH_PRICE: 'Vysoká',
    VERY_HIGH_PRICE: 'Velmi vysoká'
}

export const PATH_TYPES = {
  ON_FOOT: "Pěšky"
};