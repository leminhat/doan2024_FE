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
            {value:"159-339", label:"S"},
            {value:"339-999", label:"S"},
            {value:"999-1999", label:"S"},
            {value:"1999-2999", label:"S"},
            {value:"3999-4999", label:"S"},
        ],
    },

    {
        id:"discount",
        name:"Discount Range",
        options:[
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
        ]
    },

    {
        id :"stock",
        name:"Availability",
        options:[
            {value:"10", label:"10% And Above"},
            {value:"10", label:"10% And Above"},
        ],
    },
]