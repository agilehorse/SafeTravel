import PizzaPicture from "../resources/pizza.jpg"
import KebabPicture from "../resources/kebab.jpg"
import CafePicture from "../resources/kittycafe.jpg"
import ParkPicture from "../resources/park.png"
import GymPicture from "../resources/bananagym.jpg"
import CinemaPicture from "../resources/cinema.jpg"
import Bridge from "../resources/bridge.jpg"
import {
    CultureCategories,
    FoodCategories,
    NatureCategories,
    PlaceCategory,
    PriceRange, SightsCategories,
    SportCategories
} from "./consts";

export const NewPlace = {
    id: '',
    name: '',
    rating: 0,
    price: PriceRange.LOW_PRICE,
    distance: 0,
    picture: null,
    open: true,
    description: '',
    category: null,
    subCategory: null
}

export const Places = [
    {
        id: 'pizza_gangster',
        name: 'Pizzerie Gangster',
        rating: 8.6,
        price: PriceRange.LOW_PRICE,
        distance: 0.5,
        picture: PizzaPicture,
        open: true,
        description: 'Ačkoliv pizzerie Gangster sídlí nedaleko národního muzea, když ji navštivíte, jakoby jste se přenesli do srdce itálie.',
        category: PlaceCategory.FOOD.value,
        subCategory: FoodCategories.ITALY
    },
    {
        id: 'kebab_humar',
        name: 'Humar Kebab',
        rating: 9.3,
        price: PriceRange.MEDIUM_PRICE,
        distance: 0.6,
        picture: KebabPicture,
        open: true,
        description: '',
        category: PlaceCategory.FOOD.value,
        subCategory: FoodCategories.FASTFOOD
    },
    {
        id: 'kitty_cafe',
        name: 'Kitty cafe',
        rating: 9.8,
        price: PriceRange.HIGH_PRICE,
        distance: 0.2,
        picture: CafePicture,
        open: false,
        description: '',
        category: PlaceCategory.COFFEE,
        subCategory: null
    },
    {
        id: 'park_rieger',
        name: 'Riegerovy sady',
        rating: 8.0,
        price: PriceRange.LOW_PRICE,
        distance: 0.3,
        picture: ParkPicture,
        open: true,
        description: '',
        category: PlaceCategory.NATURE,
        subCategory: NatureCategories.PARK
    },
    {
        id: 'gym_banana',
        name: 'Banana gym',
        rating: 5.6,
        price: PriceRange.VERY_HIGH_PRICE,
        distance: 1,
        picture: GymPicture,
        open: true,
        description: '',
        category: PlaceCategory.SPORT,
        subCategory: SportCategories.GYM
    },
    {
        id: 'cinema_bigstar',
        name: 'Bigstar cinema',
        rating: 7.9,
        price: PriceRange.MEDIUM_PRICE,
        distance: 0.7,
        picture: CinemaPicture,
        open: true,
        description: '',
        category: PlaceCategory.CULTURE,
        subCategory: CultureCategories.THEATRE
    },
    {
        id: 'charles_bridge',
        name: 'Karlův most',
        rating: 8.2,
        price: PriceRange.LOW_PRICE,
        distance: 0.3,
        picture: Bridge,
        open: true,
        description: '',
        category: PlaceCategory.SIGHTS,
        subCategory: SightsCategories.HISTORIC
    }
]