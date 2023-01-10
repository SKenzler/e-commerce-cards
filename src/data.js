import imgOne from "./images/nike-air-max.png";
import imgTwo from "./images/nike-air-jordan.png";
import imgThree from "./images/nike-AJ.png";
import imgFour from "./images/nike-blazer.png";

const data = [
    {
        id: 1,
        stockStatus: 0,
        image: imgOne,
        header: "Nike Air Max",
        rating: 4,
        description: "Esse ad excepteur quis exercitation enim aliquip veniam est tempor fugiat dolore voluptate.",
        price: 230
    },

    {
        id: 2,
        stockStatus: 100,
        image: imgTwo,
        rating: 3,
        header: "Nike Air Jordan",
        description: "Ea irure adipisicing non labore id veniam do reprehenderit excepteur dolor quis. Commodo laborum cupidata.",
        price: 380
    },

    {
        id: 3,
        stockStatus: 220,
        image: imgThree,
        header: "Nike AJ",
        rating: 5,
        description: "Ex quis ipsum excepteur commodo ex proident. Enim Lorem esse ut dolore.",
        price: 420
    },

    {
        id: 4,
        stockStatus: 290,
        image: imgFour,
        header: "Nike Blazer",
        rating: 3,
        description: "Commodo reprehenderit ad deserunt occaecat ex.Culpa dolore esse elit enim aute in mollit exercitation.",
        price: 345
    }
];

export default data;