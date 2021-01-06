import PizzaIcon from "../resources/pizzaIcon.jpg"
import PizzaPicture from "../resources/pizza.jpg"
import KebabIcon from "../resources/kebabIcon.jpg"
import KebabPicture from "../resources/kebab.jpg"
import CafeIcon from "../resources/kittycafeIcon.jpg"
import CafePicture from "../resources/kittycafe.jpg"
import ParkIcon from "../resources/parkIcon.png"
import ParkPicture from "../resources/park.jpg"
import GymIcon from "../resources/bananagymIcon.jpg"
import GymPicture from "../resources/bananagym.jpg"
import CinemaIcon from "../resources/cinemaIcon.jpg"
import CinemaPicture from "../resources/cinema.jpg"
import BridgeIcon from "../resources/bridgeIcon.jpg"
import BridgePicture from "../resources/bridge.jpg"
import {
    CultureCategories,
    FoodCategories,
    NatureCategories, PATH_TYPES,
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
    icon: null,
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
        icon: PizzaIcon,
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
        icon: KebabIcon,
        picture: KebabPicture,
        open: true,
        description: 'Chutný kebab do ruky.',
        category: PlaceCategory.FOOD.value,
        subCategory: FoodCategories.FASTFOOD
    },
    {
        id: 'kitty_cafe',
        name: 'Kitty cafe',
        rating: 9.8,
        price: PriceRange.HIGH_PRICE,
        distance: 0.2,
        icon: CafeIcon,
        picture: CafePicture,
        open: false,
        description: 'Mňau mňau mňau.',
        category: PlaceCategory.COFFEE.value,
        subCategory: null
    },
    {
        id: 'park_rieger',
        name: 'Riegerovy sady',
        rating: 8.0,
        price: PriceRange.LOW_PRICE,
        distance: 0.3,
        icon: ParkIcon,
        picture: ParkPicture,
        open: true,
        description: 'Riegrovy sady leží v Praze na Vinohradech. Jde o městský park o rozloze asi 11 hektarů. V parku se nacházejí rozsáhlé travnaté plochy, dětská hřiště, sportovní stadion TJ Bohemians a sportoviště TJ Sokola Vinohrady. V severní části směrem k Žižkovu na Riegrovy sady navazuje zahrada a oddechový a sportovní park Rajská zahrada.',
        category: PlaceCategory.NATURE.value,
        subCategory: NatureCategories.PARK
    },
    {
        id: 'gym_banana',
        name: 'Banana gym',
        rating: 5.6,
        price: PriceRange.VERY_HIGH_PRICE,
        distance: 1,
        icon: GymIcon,
        picture: GymPicture,
        open: false,
        description: 'Staré fitcentrum, které bude o chvíli zavírat.',
        category: PlaceCategory.SPORT.value,
        subCategory: SportCategories.GYM
    },
    {
        id: 'cinema_bigstar',
        name: 'Bigstar cinema',
        rating: 7.9,
        price: PriceRange.MEDIUM_PRICE,
        distance: 0.7,
        icon: CinemaIcon,
        picture: CinemaPicture,
        open: true,
        description: 'Nové luxusní kino, ve kterém sa vžijete přímo do filmu.',
        category: PlaceCategory.CULTURE.value,
        subCategory: CultureCategories.THEATRE
    },
    {
        id: 'charles_bridge',
        name: 'Karlův most',
        rating: 8.2,
        price: PriceRange.LOW_PRICE,
        distance: 0.3,
        icon: BridgeIcon,
        picture: BridgePicture,
        open: true,
        description: 'Karlův most (německy die Karlsbrücke, původně Kamenný most) je nejstarší stojící most přes řeku Vltavu v Praze a druhý nejstarší dochovaný most v České republice. Po pražském mostě Juditině, kamenném mostě v Písku a mostě v Roudnici nad Labem jde v Čechách v pořadí o čtvrtou kamennou mostní stavbu.',
        category: PlaceCategory.SIGHTS.value,
        subCategory: SightsCategories.HISTORIC
    }
];

export const PATHS = [
    {
        id: "josefov",
        name: "Josefov – Pražský hrad",
        rating: 120,
        description: "Jedinečná cesta skrz jednu z mála zachovalých židovských čtvrtí v Evropě.",
        duration: 60*10,
        type: PATH_TYPES.ON_FOOT,
        path: [
            {
                id: "staromestske namesti",
                name: "Staroměstské náměstí",
                description: `
                Náměstí v Praze v centru Starého Města a historického jádra velkoměsta vůbec.
                Staroměstské náměstí obklopují historické stavby, z nichž vyniká Staroměstská radnice s orlojem, 
                Týnský chrám, husitský kostel svatého Mikuláše na Starém Městě, palác Kinských a dům „U Kamenného zvonu“. 
                Na náměstí stojí pomník mistra Jana Husa a Mariánský sloup. Renesanční, barokní a rokokové domy po obvodu
                náměstí mají románské a gotické základy.
                `
            },
            {
                id: "spanelska synagoga",
                name: "Španělská synagoga",
                description: `
                Španělská synagoga (původně Templ v Dušní ulici) je nejmladší synagogou v tzv. židovském městě na pražském Josefově. 
                Byla postavena v maurském slohu. Nachází se v Dušní ulici v sousedství kostela sv. Ducha a parčíku s pomníkem
                Franze Kafky od Jaroslava Róny. V současnosti je spravována Židovským muzeem v Praze.
                `
            },
            {
                id: "pinkasova synagoga",
                name: "Pinkasova synagoga",
                description: `
                Pinkasova synagoga je druhou nejstarší dochovanou synagogou v Praze. Byla postavena z iniciativy
                příslušníka významné rodiny své doby Arona Mešulama Horovice v první polovině 16. století. V současné
                době je spravována Židovským muzeem v Praze a slouží jako památník přes 80 000 českých Židů,
                kteří zahynuli během holokaustu.
                `
            },
            {
                id: "staronova synagoga",
                name: "Staronová synagoga",
                description: `
                Staronová synagoga v Praze, mezinárodně známá také jako Altneuschul, je jedna z nejstarších synagog v
                Evropě, která se stále používá k náboženským obřadům. Zároveň je jednou z nejstarších dochovaných synagog
                ve střední Evropě a také nejstarší dochovanou stavbou Josefova.
                `
            }
        ]
    },
    {
        id: "kralovske vinohrady",
        name: "Cesta Královskými Vinohrady",
        rating: 54,
        description: "Cesta jednou z nedoceněných čtvrtí města.",
        duration: 60*4,
        type: PATH_TYPES.ON_FOOT,
        path: []
    }
];