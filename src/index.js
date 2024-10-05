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

// function Menu() {
//     const pizzas = []
//     const pizzaNum = pizzas.length;
//     return (
//         <div className='menu'>
//             <h2>Our menu</h2>
//             {pizzaNum > 0 && // condional rendering using the and operator 
//                 <ul className='pizzas'>
//                     {
//                         pizzaData.map((pizza) => {
//                             return <Pizza pizzaObj={pizza} key={pizza.name} />
//                         })
//                     }
//                 </ul>}
//         </div>
//     )
// }
function Menu() {
    const pizzas = pizzaData
    // const pizzas = []
    const pizzaNum = pizzas.length;
    return (
        <div className='menu'>
            <h2>Our menu</h2>
            {
                pizzaNum>0? 
                <p>Italiano pizzas, 6 delicious Pizzas to choose from, All from our stone oven, all organic, all delicious</p>
                :null
            }
            {pizzaNum > 0 ? // condional rendering using the Ternary operator operator 
                <ul className='pizzas'>
                    {
                        pizzaData.map((pizza) => {
                            return <Pizza pizzaObj={pizza} key={pizza.name} />
                        })
                    }
                </ul>
                : <p> We still repairing our Menu please comback later!</p>}
        </div>
    )
}
function Pizza(props) {
    const { pizzaObj } = props
    return (
        
        <li className={`pizza ${pizzaObj.soldOut?'sold-out':""}`}>
            <img src={pizzaObj.photoName} alt={"amr"} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/* {
                    pizzaObj.soldOut?<span>'SOLD OUT'</span>
                    :<span>{pizzaObj.price +3}</span>
                } */}
                <span>{pizzaObj.soldOut?'SOLD OUT' : pizzaObj.price + 3}</span>
            </div>
        </li>
    )

}
function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // return (
    //     <div className='order'>
    //         {/* condional rendering using the and operator */}
    //         <footer className='footer'>{isOpen && <p>We Are Open until {closeHour}.00, You can visit us or order online !</p>}</footer>
    //         <button className='btn'> Order Now !</button>
    //     </div>
    // )
    return (
        <footer className='footer'>
            {/* condional rendering using the Ternary operator */}
            {isOpen ? <Order closeHour={closeHour} />
                : (<p>WE are close now!, You can visit us betweem {openHour}.00 and {closeHour}.00</p>)}
        </footer>
    )

}

function Order(props) {
    const {closeHour}=props
    return (
        <div className='order'>
            <p>We Are Open until {closeHour}.00, You can visit us or order online !</p>
            <button className='btn'> Order Now!</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>)