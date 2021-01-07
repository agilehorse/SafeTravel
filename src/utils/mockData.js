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

import StaromePicture from "../resources/staromestske_namesti.jpg";
import SpanelPicture from "../resources/spanelska_synagoga.png";
import StaronovaPicture from "../resources/staronova_synagoga.png";
import PinkasPicture from "../resources/pinkasova_synagoga.jpg";

import NamMiruPicture from "../resources/namesti_miru.jpg";

import {
    CultureCategories,
    FoodCategories,
    NatureCategories, PATH_TYPES,
    PlaceCategory,
    PriceRange, SightsCategories,
    SportCategories
} from "./consts";
import {Spa} from "@material-ui/icons";

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
        picture: SpanelPicture,
        path: [
            {
                id: "staromestske namesti",
                name: "Staroměstské náměstí",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.9147219463102!2d14.418562451757904!3d50.08746817932606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e93e1fa817%3A0x58841cb69a51337!2zU3Rhcm9txJtzdHNrw6kgbsOhbS4sIDExMCAwMCBTdGFyw6kgTcSbc3Rv!5e1!3m2!1scs!2scz!4v1610013703938!5m2!1scs!2scz",
                description: `
                Náměstí v Praze v centru Starého Města a historického jádra velkoměsta vůbec.
                Staroměstské náměstí obklopují historické stavby, z nichž vyniká Staroměstská radnice s orlojem, 
                Týnský chrám, husitský kostel svatého Mikuláše na Starém Městě, palác Kinských a dům „U Kamenného zvonu“. 
                Na náměstí stojí pomník mistra Jana Husa a Mariánský sloup. Renesanční, barokní a rokokové domy po obvodu
                náměstí mají románské a gotické základy.
                `,
                picture: StaromePicture
            },
            {
                id: "spanelska synagoga",
                name: "Španělská synagoga",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.700847717051!2d14.418654451757963!3d50.09043077932629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e9ca5fda67%3A0xb74e9199050993dd!2zxaBwYW7Em2xza8OhIFN5bmFnb2dh!5e1!3m2!1scs!2scz!4v1610014252968!5m2!1scs!2scz",
                description: `
                Španělská synagoga (původně Templ v Dušní ulici) je nejmladší synagogou v tzv. židovském městě na pražském Josefově. 
                Byla postavena v maurském slohu. Nachází se v Dušní ulici v sousedství kostela sv. Ducha a parčíku s pomníkem
                Franze Kafky od Jaroslava Róny. V současnosti je spravována Židovským muzeem v Praze.
                `,
                picture: SpanelPicture
            },
            {
                id: "pinkasova synagoga",
                name: "Pinkasova synagoga",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.7878972184208!2d14.41477815175796!3d50.0892249793261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e85e9af185%3A0x294f2ae19539722d!2sPinkasova%20Synagoga!5e1!3m2!1scs!2scz!4v1610014313305!5m2!1scs!2scz",
                description: `
                Pinkasova synagoga je druhou nejstarší dochovanou synagogou v Praze. Byla postavena z iniciativy
                příslušníka významné rodiny své doby Arona Mešulama Horovice v první polovině 16. století. V současné
                době je spravována Židovským muzeem v Praze a slouží jako památník přes 80 000 českých Židů,
                kteří zahynuli během holokaustu.
                `,
                picture: PinkasPicture
            },
            {
                id: "staronova synagoga",
                name: "Staronová synagoga",
                map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.726779359211!2d14.416410851757961!3d50.09007157932622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94e868e5c8c9%3A0x94be0e2fdb884bfa!2sStaronov%C3%A1%20Synagoga!5e1!3m2!1scs!2scz!4v1610010063232!5m2!1scs!2scz",
                description: `
                Staronová synagoga v Praze, mezinárodně známá také jako Altneuschul, je jedna z nejstarších synagog v
                Evropě, která se stále používá k náboženským obřadům. Zároveň je jednou z nejstarších dochovaných synagog
                ve střední Evropě a také nejstarší dochovanou stavbou Josefova.
                `,
                picture: StaronovaPicture
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
        picture: NamMiruPicture,
        path: []
    }
];