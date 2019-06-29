export interface Hero {
    name: string,
    power: number,
    appearance: {
        eyeColor: string,
        gender: string,
        hairColor: string,
        height: string[],
        race: string,
        weight: string[],
    },
    biography: {
        aliases: string[],
        alignment: string,
        alterEgos: string,
        firstAppearance: string,
        fullname: string,
        placeofBirth: string,
        publisher: string,
    },
    image: {
        url: string
    },
    connections: {
        groupAffiliation: string,
        relatives: string
    },
    powerstats: {
        combat: string,
        durability: string,
        intelligence: string,
        power: string,
        speed: string,
        strength: string,
    },
    work: {
        base: string,
        occupation: string,
    }
}

