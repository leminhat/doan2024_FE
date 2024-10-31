export const color=[
    "white",
    "black",
    "red",
    "marun",
    "being",
    "pink",
    "green",
    "yellow",
];

export const filters =[
    {
        id: "color",
        name:"Color",
        options:[
            {value:"white", label:"white"},
            {value:"black", label:"Black"},
            {value:"red", label:"red"},
            {value:"marun", label:"marun"},
            {value:"being", label:"being"},
            {value:"pink", label:"pink"},
            {value:"green", label:"green"},
            {value:"yellow", label:"yellow"},
        ],
    },

    {
        id:" size",
        name:"Size",
        options: [
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
        ],
    },
];

export const singleFilter=[
    {
        id: "price",
        name:"Price",
        options: [
            {value:"159-339", label:"159-339"},
            {value:"339-999", label:"339-999"},
            {value:"999-1999", label:"999-1999"},
            {value:"1999-2999", label:"1999-2999"},
            {value:"3999-4999", label:"3999-4999"},
        ],
    },

    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10", label:"10% And Above"},
            {value:"20", label:"20% And Above"},
            {value:"30", label:"30% And Above"},
            {value:"40", label:"40% And Above"},
            {value:"50", label:"50% And Above"},
            {value:"60", label:"60% And Above"},
            {value:"70", label:"70% And Above"},
            {value:"80", label:"80% And Above"},
        ]
    },

    {
        id :"stock",
        name:"Availability",
        options:[
            {value:"10", label:"trong"},
            {value:"20", label:"ngoai"},
        ],
    },
]