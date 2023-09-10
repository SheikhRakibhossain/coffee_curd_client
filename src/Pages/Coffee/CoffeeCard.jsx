
const CoffeeCard = ({ coffee }) => {
    console.log(coffee)

    // console.log(coffee)
    const { coffeeName, chef, category, test, details, supplier, photoURL } = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="coffee Image" className="w-2/3" /></figure>
            <div className="flex justify-between items-center w-full p-2">
                <div>
                    <h2 className="card-title">{coffeeName}</h2>
                    <p>{chef}</p>
                    <p>{category}</p>
                    <p>{test}</p>
                    <p>{details}</p>
                    <p>{supplier}</p>
                </div>
                <div className="card-actions justify-end ">
                    <div className="btn-group btn-group-vertical space-y-3">

                        <button className="btn btn-primary">Watch</button>
                        <button className="btn btn-success">Watch</button>
                        <button className="btn btn-danger">Watch</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;