"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const notes = [
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234001,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Grocery Run Today",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I finally made it to the store after putting it off all week. The fridge was looking pretty sad.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Grabbed the essentials: bread, bananas, oat milk, and a ton of snacks I probably didn’t need.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Totally forgot to buy rice again. Gotta write it down next time in all caps or something.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234002,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Saturday Chore Madness",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Started cleaning around noon and didn’t stop until the sun was down. Why is it so easy to let stuff pile up?",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Vacuumed the living room, scrubbed the sink, and tackled that weird smell in the fridge. Pretty sure it was the leftovers from two weeks ago.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Still need to fold laundry, but that’s a future me problem.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234003,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Late Night Curiosity",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Couldn't sleep again, so I ended up googling a bunch of random stuff like why cats knead blankets and how long stars live.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Also stumbled into a rabbit hole about how memory works and why we forget people’s names instantly.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Might start a ‘things I randomly learned’ section somewhere in this app.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234004,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Movie Night Picks",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Was in the mood for something feel-good, so I rewatched The Secret Life of Walter Mitty. Still hits just right.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Debated starting a new anime, but my attention span wasn’t cooperating tonight.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Might do a Studio Ghibli weekend soon — Spirited Away, Howl’s, and maybe My Neighbor Totoro for comfort.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234005,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "2AM Ramblings",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Why do all the deep thoughts hit right when I’m about to fall asleep?",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I started wondering what it’d be like to live in a small cabin in the woods. Just me, a cat, and lots of books.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Maybe I should start journaling more often. Or maybe I just need to go to bed earlier.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234006,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Prepping for That Trip",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I’m only going away for a night but somehow I’ve packed like I’m leaving for a week.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Mostly clothes, chargers, snacks, and like three books I won’t actually read.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Need to double-check that I packed my toothbrush though. I always forget that one thing.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234007,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Books on My Radar",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I keep hearing good things about Atomic Habits — maybe it’s time to finally read it.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Also want to revisit some Murakami. Norwegian Wood just gives a whole vibe on rainy days.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Might do a no-screens weekend and try to read for real instead of just scrolling endlessly.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234008,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Gift Ideas (Help!)",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Mom’s birthday is coming up and I have zero clue what to get her.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Thinking maybe a cozy candle set or something handmade — she likes those thoughtful touches.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Might try making a mini photo album if I can find cute old pictures.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234009,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "This Week’s Meals (Hopefully)",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Trying to actually cook this week instead of ordering out every day.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Monday: Stir fry. Tuesday: Pasta. Wednesday: Leftovers. Thursday: Tacos maybe?",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Friday is always takeout night though. That’s tradition.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date(),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234010,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Apps I’m Addicted To",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I check Spotify before I even get out of bed. My Discover Weekly has been fire lately.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Notion is slowly becoming my brain. I use it for everything — notes, plans, even dream logs.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Also, I should really spend less time on Instagram. Seriously.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
];
exports.default = {
    users: [
        {
            id: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
            name: "Ryoga",
            password: "$2b$12$4.fmcm0o5bcVfqTKCJ2DSuJFHd4cGwO.FhrX.VKmek7N89V0AeDl2",
            email: "ryoga@ishii.com",
        },
        {
            name: "Pinion",
            password: "$2b$12$i/lWDbHUhUtQPbEZM80X9OIXydxTAkYEpZYD8cLF0l6nM8mtdtpJ.",
            email: "pinion@team.com",
            id: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        },
    ],
    notes,
};
