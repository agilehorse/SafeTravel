
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