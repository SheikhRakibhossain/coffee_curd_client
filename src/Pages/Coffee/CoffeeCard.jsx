import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    // console.log(coffee)

    // console.log(coffee)
    const { _id, coffeeName, chef, category, test, details, supplier, photoURL } = coffee;

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`, {

                    method: "DELETE",
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee data has been deleted.',
                                'success'
                            )
                        }
                    })
                    .catch(error => console.log(error.message))


                console.log('delete conformed')
            }
        })



    }

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
                    <div className="btn-group btn-group-vertical space-y-3 border-0">

                        <button className="btn btn-primary border-0">View</button>
                        <button className="btn btn-success">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-secondary border-0">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CoffeeCard;