export interface SubQues_Item {
    SubQues: string
    Ans: string
}

export interface FAQ_Item {
    Que: string
    SubQues_Ans: SubQues_Item[]
}

export const FAQ_TEXTS: FAQ_Item[] = [
    {
        Que: 'Frequently Asked Questions',
        SubQues_Ans: [
            {
                SubQues: 'A hale holds nearly 30% of POOPE Coin supply!',
                Ans: 'A hale holds nearly 30% of POOPE Coin supply!'
            },
            { SubQues: 'Can you put a cap on POOPE Coin?', Ans: 'sefiniosenfi' },
            { SubQues: 'jiefbiefb', Ans: 'feifiefiieufbuiebf' }
        ]
    },
    {
        Que: 'Resources',
        SubQues_Ans: [
            { SubQues: 'eoipnfoisnef', Ans: 'A hale holds nearly 30% of POOPE Coin supply!' },
            { SubQues: 'rmgbpormgmrg', Ans: 'sefiniosenfi' },
            { SubQues: 'jiefbiefb', Ans: 'feifiefiieufbuiebf' }
        ]
    },
    {
        Que: "How to's",
        SubQues_Ans: [
            { SubQues: 'feosfopmnseoifn', Ans: 'A hale holds nearly 30% of POOPE Coin supply!' },
            { SubQues: 'dpkrdpsokgrkepgk', Ans: 'sefiniosenfi' },
            { SubQues: 'jiefbiefb', Ans: 'feifiefiieufbuiebf' }
        ]
    },
    {
        Que: 'Documentation',
        SubQues_Ans: [
            { SubQues: 'nsdirngikrdgrgddrg', Ans: 'A hale holds nearly 30% of POOPE Coin supply!' },
            { SubQues: 'flvbmfdlmgbolr', Ans: 'sefiniosenfi' },
            { SubQues: 'jiefbiefbsefesf', Ans: 'feifiefiieufbuiebf' }
        ]
    }
]