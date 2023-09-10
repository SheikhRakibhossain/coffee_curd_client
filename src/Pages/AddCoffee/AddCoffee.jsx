
const AddCoffee = () => {
    const handleCoffeeSubmit = (event )=>{
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffee_name.value;
        const chef = form.chef.value;
        const category = form.category.value;
        const test = form.test.value;
        const details = form.details.value;
        const supplier = form.supplier.value;
        const photoURL = form.photoURL.value;
        const coffeeInfo ={ coffeeName, chef, category, test, details, supplier, photoURL}
        console.log(coffeeInfo);

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                'content-type':'application/json'

            },
            body: JSON.stringify(coffeeInfo)
        })
        .then(res => res.json())
        .then( data =>{

            if(data.insertedId){
                alert('The new coffee has added on your database file. Now you can take it for your client to show off. Thank you')
            }

            console.log(data)

        })
        .catch( error => console.log(error))


    }
    return (
        <>
            <h1 className="text-center text-4xl font-mono font-bold py-4">I am add coffee page.</h1>
            <form onSubmit={handleCoffeeSubmit}>
                <div className="px-6 w-3/4 mx-auto">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" name="coffee_name" placeholder="Coffee Name" className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" placeholder="Coffee Chef" name="chef" className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" name="test" placeholder="Coffee test" className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" name="category" placeholder="Category" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" name="details" placeholder="Coffee Details" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" name="supplier" placeholder="Coffee Details" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <div className="mt-2">
                                <input type="text" name="photoURL" placeholder="Photo URL" className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <input type="submit" value='Submit' className="bg-sky-500 hover:bg-sky-700 px-6 py-2 cursor-pointer text-white" />
                    </div>
                </div>
            </form>

        </>
    );
};

export default AddCoffee;