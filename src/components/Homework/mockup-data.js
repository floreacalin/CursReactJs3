export let testbundles = [
    {
        id:1,
        title: "Curățenia băilor",
        defaultQuestionId: 1,
        questions:[1,2, 3, 4]
    },
    {
        id:2,
        title: "Serviciile de frontdesk?",
        questions:[5,6]
    },
    {
        id:3,
        title: "Vizita per ansamblu?",
        defaultQuestionId: 7,
        questions:[4,7]
    },
    {
        id:4,
        title: "Cât de mulțumit sunteți de serviciile medicale oferite?",
        questions:[4,9]

    }
]

export let questions = [
    {
        id:1,
        title: "Cum vi s-a părut curățenia băilor la general?",
        type: "degree",
        answers:['poor', 'adequate', 'very good']
    },
    {
        id:2,
        title: "Curățenia toaletei?",
        type: "degree",
        answers:['1', '2', '3', '4', '5']
    },
    {
        id:3,
        title: "Curățenia lavoarului?",
        type: "degree",
        answers:['poor', 'adequate', 'very good']
    },
    {
        id:4,
        title: "Doriți să lăsați un mesaj scris?",
        type: "text"
    },
    {
        id:5,
        title: "Cât de mulțumit sunteți de serviciile de frontdesk?",
        type: "degree",
        answers:['poor', 'adequate', 'very good']
    },
    {
        id:6,
        title: "Ce anume ați recomanda să îmbunătățim?",
        type: "select",
        answers:['amabilitate', 'viteza de răspuns', 'altceva']
    },
    {
        id:7,
        title: "Cum vi s-a părut vizita per ansamblu?",
        type: "select",
        answers:['poor', 'adequate', 'very good']
    },
    {
        id:9,
        title: "Cât de mulțumit sunteți de serviciile medicale oferite?",
        type: "select",
        answers:['poor', 'adequate', 'very good']
    },
   
];
export let responses = [
    {
        id:1,
        bundleId:1,
        questionId:1,
        answer:"poor"
    },
    {
        id:2,
        bundleId:1,
        questionId:1,
        answer:"adequate"
    },
    {
        id:3,
        bundleId:1,
        questionId:1,
        answer:"poor"
    },
    {
        id:4,
        bundleId:1,
        questionId:1,
        answer:"very good"
    },
    {
        id:5,
        bundleId:3,
        questionId:7,
        answer:"poor"
    },
    {
        id:6,
        bundleId:3,
        questionId:7,
        answer:"adequate"
    },
    {
        id:7,
        bundleId:3,
        questionId:7,
        answer:"poor"
    },
    {
        id:8,
        bundleId:3,
        questionId:4,
        answer:"A fost foarte frig!"
    }
];
