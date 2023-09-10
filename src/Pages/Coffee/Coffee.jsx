import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
// import { useLoaderData } from "react-router-dom";

const Coffee = () => {

    // const coffees = useLoaderData();
    // console.log(coffees);
    const [coffees, setCoffees] = useState([])
    console.log('coffee', coffees)
    useEffect(() => {

        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoffees(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className="grid md:grid-cols-2 gap-6">

                {coffees.map(coffee =><CoffeeCard 
                                        key={coffee._id} 
                                        coffee={coffee}
                                        ></CoffeeCard>)
                }


            </div>
        </>
    );
};

export default Coffee;