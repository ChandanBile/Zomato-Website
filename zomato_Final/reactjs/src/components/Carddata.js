import { useEffect } from "react"
import { useState } from "react"
import Card from "./Card"

const Carddata = () => {
    const [Carddata, setData] = useState(null)
    const list = [
        {
            id: 1,
            title: 'Breakfast',
            img: '../assets/breakfast.jpg',
            description: 'Start your day with exclusive breakfast options'
        },
        {
            id: 2,
            title: 'Lunch',
            img: '../assets/lunch.jpg',
            description: 'Start your day with exclusive breakfast options '
        },
        {
            id: 3,
            title: 'Snacks',
            img: '../assets/snacks.png',
            description: 'Start your day with exclusive breakfast options'
        },
        {
            id: 4,
            title: 'Dinner',
            img: '../assets/dinner.png',
            description: 'Start your day with exclusive breakfast options'
        },
        {
            id: 5,
            title: 'Drinks',
            img: '../assets/drinks.png',
            description: 'Start your day with exclusive breakfast options'
        },
        {
            id: 6,
            title: 'Nightlife',
            img: '../assets/nightlife.png',
            description: 'Start your day with exclusive breakfast options'
        }
    ]
    useEffect(() => {
        setData(list)
    }, [])

    return (
        Carddata && Carddata.map(data => {
            return (
                <Card key={data.id} title={data.title} img={data.img} description={data.description} />
            )
        })
    )
}
export default Carddata