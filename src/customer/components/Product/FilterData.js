export const color=[
    "white",
    "black",
    "red",
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
            {value:"black", label:"black"},
            {value:"red", label:"red"},
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
            {value:"0-9999", label:"0-9999"},
            {value:"10000-29999", label:"10000-29999"},
            {value:"30000-49999", label:"30000-49999"},
            {value:"50000-69999", label:"50000-69999"},
            {value:"70000-99999", label:"70000-99999"},
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
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out Of Stock"},
        ],
    },
]