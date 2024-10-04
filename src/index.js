import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className='header'>
            <h1>Fast Pizza To Order</h1>
        </header>
    )
}

function Menu() {

    function pizzaName() {
        const { name } = pizzaData;
        name = pizzaData.map(name => name)
    }

    return (
        <div className='menu'>
            <h2>Our menu</h2>
            <Pizza pizzaName='Margherita' ingredients='Bread with italian olive oil and rosemary' image='pizzas/margherita.jpg' price={10}  />
            <Pizza pizzaName='Focaccia' ingredients='Tomato and mozarella' image='pizzas/focaccia.jpg' price={12} />
        </div>
    )
}
function Pizza(props) {
    const{pizzaName,ingredients,image,price}=props
    return (
        <div className='pizza'>
            <img src={image} alt={pizzaName} />
            <div>
                <h3>{pizzaName}</h3>
                <p>{ingredients}</p>
                <span>{price +3}</span>
            </div>
        </div>
    )

}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen)

    return (
        <footer className='footer'>
            {new Date().toLocaleTimeString()}. We are currently open
        </footer>
    )

}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)