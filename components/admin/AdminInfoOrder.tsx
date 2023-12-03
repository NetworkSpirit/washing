import LeftBlock from "./UI/LeftBlock.tsx";
import OrderIterator from "./IteratorBlock/OrderIterator.tsx";
import classes from "./Admin.module.scss";
const AdminInfoOrder = () => {
    const options = [
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },{
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },{
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },{
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },
        {
            name: "Заказ № 315-456",
            price: 500,
            priceEnd: 1500,
            date: "23.03.2023",
            count: 3,
            address: "Спб, маршала казакова 49",
            phone: "+79112172384"
        },



    ]
    return (
        <div>
            <LeftBlock/>
            <div className={classes.container}>
            {
                options.map((option, index) => {
                    return <OrderIterator key={index} name={option.name} price={option.price}
                                          priceEnd={option.priceEnd} date={option.date} count={option.count}
                                          address={option.address} phone={option.phone}/>
                })
            }
            </div>
        </div>
    );
};

export default AdminInfoOrder;