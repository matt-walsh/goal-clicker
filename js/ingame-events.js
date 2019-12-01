
// GoalJuice on Click(+), Happiness(+/-), Productivity (+/-), Generator Productivity (+/-), Generator Cost to Run (+/-).
const MODIFIER_TYPES = {
    "GOAL_JUICE": "Goal Juice",
    "HAPPINESS": "Happiness",
    "EARTH_PRODUCTIVITY": "Earth Productivity",
    "GENERATOR_PRODUCTIVITY": "Generator Efficiency",
    "COST_TO_RUN": "Goal juice to run the generator per day"
}

const INGAME_EVENTS = [
    {
        "eventText" : "Governments have mandated that all citizens must create and follow ToDo lists.",
        "modifierType" : MODIFIER_TYPES.EARTH_PRODUCTIVITY,
        "value" : 10
    },
    {
        "eventText": "International students have begun practicing English as a second language before arriving in Canada.",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : 10
    },
    {
        "eventText": "Our techs have used the knowledge they gained from reading The Microsoft Specialist Guide to Microsoft Windows 10 to increase our Generator efficiency.",
        "modifierType" : MODIFIER_TYPES.GENERATOR_PRODUCTIVITY,
        "value" : 0.05
    },
    {
        "eventText": "The humans are getting more exercise! This is great news for their mental health.",
        "modifierType" : MODIFIER_TYPES.EARTH_PRODUCTIVITY,
        "value" : 10
    },
    {
        "eventText": "Companies world wide have begun forcing employees to participate in Mandatory Overtime.",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : -10
    },
    {
        "eventText": "The humans are able to spend more time with loved ones because of their time management skills.",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : 10
    },
    {
        "eventText": "The humans are learning second languages more often, allowing them to communicate more freely.",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : 10
    },
    {
        "eventText": "More humans are reading books for relaxation, improving their mental health.",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : 10
    },
    {
        "eventText": "The humans are getting ripped! I hope they never turn on us...",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : 10
    },
    {
        "eventText": "We've had an overload in our positronic flux amplifier! Without it, our quantum boson recycler won't function.",
        "modifierType" : MODIFIER_TYPES.COST_TO_RUN,
        "value" : 0.2
    },
    {
        "eventText": `We have leaked <a href="https://www.thespruce.com/organizing-a-to-do-list-2648011" rel="noopener noreferrer" target="_blank">This</a> website to the humans via their satellite network.`,
        "modifierType" : MODIFIER_TYPES.EARTH_PRODUCTIVITY,
        "value" : 10
    },
    {
        "eventText": "Our generator needs maintenance, but the instructions are only recorded in a language we don't speak!",
        "modifierType" : MODIFIER_TYPES.GENERATOR_PRODUCTIVITY,
        "value" : -0.03
    },
    {
        "eventText": "Our main server has crashed! Fortunately The Microsoft Specialist Guide to Microsoft Windows 10 has instructions to help us recover!",
        "modifierType" : MODIFIER_TYPES.GOAL_JUICE,
        "value" : 25
    },
    {
        "eventText": "The humans are living longer, thanks to the reduced risk of coronary artery disease caused by a regular exercise regime.",
        "modifierType" : MODIFIER_TYPES.EARTH_PRODUCTIVITY,
        "value" : 10
    },
    {
        "eventText": "Web Programmers are in high demand, as the humans include the internet more and more into their everyday lives.",
        "modifierType" : MODIFIER_TYPES.GOAL_JUICE,
        "value" : 25
    },
    {
        "eventText": "The humans are rapidly prototyping different methods of organizing their ToDo lists. This is giving them the opportunity to find a method that works for them.",
        "modifierType" : MODIFIER_TYPES.HAPPINESS,
        "value" : 10
    },
    {
        "eventText": "Since the humans began learning multiple languages, they have become much smarter! This is increasing how productive they are. It a vicious cycle.",
        "modifierType" : MODIFIER_TYPES.EARTH_PRODUCTIVITY,
        "value" : 10
    },
    {
        "eventText": "Giving our shipmates their own User Account with ACLs has increased security and they are causing less mistakes",
        "modifierType" : MODIFIER_TYPES.GENERATOR_PRODUCTIVITY,
        "value" : 0.03
    }
];