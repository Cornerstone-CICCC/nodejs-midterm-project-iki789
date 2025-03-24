"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const notes = [
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234001,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Simple Ramen, Simple Peace",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Today, I made ramen. Not from a packet — from scratch. The broth simmered for hours, rich with flavor and warmth.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "There’s something meditative about slicing the scallions, soft-boiling the egg just right, watching the steam rise.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "For a moment, I was just a man in a kitchen, not a shinobi. And it felt... normal.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-20T08:30:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234002,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Walking Through the Rain",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "The rain fell steadily today. No missions, no blood — just quiet steps on soaked stone.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "People avoid the rain. I welcome it. It hides the scent of sorrow better than perfume ever could.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Sometimes I wonder if Sasuke likes the rain too.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-19T14:45:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234003,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Dreams I Never Speak Of",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I dreamt I was at a festival. Lanterns lit the night, and laughter surrounded me. Sasuke was there. So was Mother.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "No masks, no ANBU, no guilt — just warmth. It’s a dream that feels more real than reality sometimes.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "But I always wake up before the fireworks.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-18T18:20:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234004,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "The Weight Behind My Eyes",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "The Sharingan sees much, but it costs more than it gives.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I sometimes forget what it’s like to look at someone without analyzing weakness.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "If I could turn it off completely, would I still be myself?",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-17T21:05:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234005,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "A Crow Landed Beside Me",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "It didn’t speak. It didn’t judge. It just sat there — silent, black feathers glistening in the sun.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Crows are seen as omens. To me, they are companions.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I think I trust them more than most people.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-16T12:00:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234006,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Strange Peace in Tea",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "A kind old woman gave me tea today without asking who I was.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "It tasted like jasmine and calm. For five minutes, I was just another traveler, not a rogue shinobi.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Small kindnesses feel louder than thunder.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-15T07:10:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234007,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "The Silence Between Missions",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "It’s not the violence that haunts me. It’s the silence that follows.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "When everything is still, I can hear my heartbeat — slow, steady, undeserved.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "In those moments, I wonder if redemption is possible.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-14T16:50:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234008,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Training Alone",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I practiced genjutsu today with no target — just illusions cast on water to see if I still had precision.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Sometimes, I train not to get stronger, but to forget.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Muscle memory is easier to live with than actual memory.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-13T09:40:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234009,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "When I Watch the Moon",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "The moon has seen everything. Blood, betrayal, forgiveness. It just watches — never judging.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I wonder how many secrets the moon holds. I wonder if it knows mine.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "If reincarnation is real, I want to come back as the moon.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-12T23:30:00Z"),
        userId: "ede471c6-18a6-40f2-8ef6-df7a8a75fd2d",
        note: {
            time: 1678901234010,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "A Thought About Brotherhood",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Sometimes I imagine what it would’ve been like to grow old with Sasuke. To argue about dumb things. To protect him without lies.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "But then I remember — I made a choice. One that fractured him to save him.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I just hope he understands one day. Even if it’s too late.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234001,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Ramen with Iruka-sensei Again!",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "He treated me to miso ramen today. Same place, same seat, same awesome flavor.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "We didn’t talk about anything big. Just laughed a lot. That’s what I love about him.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "No matter what happens, ramen always brings me back to the people who believed in me first.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234002,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Training Until I Drop!",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Shadow clone training was brutal today. My chakra pool is screaming at me.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "But I gotta keep pushing. I’m not the same kid I was before. Hokage dreams don’t come easy.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "One day, they’ll look at me and say, “That’s Naruto Uzumaki — our Hokage.” Believe it!",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234003,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Thinking About Sasuke Again",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "No matter what he says or does, I can’t give up on him.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "We fought side by side. We laughed. We were brothers. That doesn’t just go away.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I’ll bring him back, even if it takes everything I’ve got. That’s a promise!",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234004,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Ichiraku’s New Menu Item!",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "They added spicy garlic pork ramen today. I nearly cried, it was so good.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Teuchi-san said I was the first to try it. Said it was “worthy of a future Hokage.”",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Ramen like that gives me the strength to punch a boulder. Or at least try.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234005,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "A Letter I Never Sent to Jiraiya",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Hey Pervy Sage... It’s been a while. I hope you’re watching. I’ve come a long way.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I mess up sometimes, but I remember your training. Your books. Your goofy smile.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "You believed in me when I didn’t even know how. Thank you.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234006,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Tried Meditating... Failed Instantly",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Tried to sit still like Kakashi-sensei said. Lasted 45 seconds before I started thinking about grilled fish.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Meditation is hard, okay? I’m better at moving than sitting.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Still gonna try again tomorrow. Maybe I’ll tape my hands to my knees or something.",
                    },
                },
            ],
            version: "2.28.2",
        },
    },
    {
        id: (0, uuid_1.v4)(),
        createdAt: new Date("2025-03-02T10:15:00Z"),
        userId: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        note: {
            time: 1678902234007,
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "I Saw Konohamaru Training Today",
                        level: 2,
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "He reminded me of... well, me. Same spark, same stubbornness, same nosebleeds from Sexy Jutsu.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "I don’t know if I’m a great role model, but he looks up to me. So I’m gonna keep trying to be better.",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "If he becomes Hokage before me though... I’m filing a complaint.",
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
            name: "Itachi Uchiha",
            password: "$2b$12$4.fmcm0o5bcVfqTKCJ2DSuJFHd4cGwO.FhrX.VKmek7N89V0AeDl2",
            email: "itachi@uchiha.com",
        },
        {
            name: "Naruto Uzumaki",
            password: "$2b$12$4.fmcm0o5bcVfqTKCJ2DSuJFHd4cGwO.FhrX.VKmek7N89V0AeDl2",
            email: "naruto@team7.com",
            id: "84da550e-e0d0-4ec7-8e64-7377a626955b",
        },
    ],
    notes,
};
