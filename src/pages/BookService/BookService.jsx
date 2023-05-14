
import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../providers/AuthProvider';


const BookService = () => {
    const service = useLoaderData();
    const { title,  price, img, service_id } = service;
    const {user} = useContext(AuthContext);

    const handleBookService = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email, 
            img: img,
            date, 
            service: title,
            service_id, 
            price: price
        }

        console.log(booking);

        fetch('http://localhost:5000/orders', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })

    }

    return (
        <div className='mb-10'>
            <h2 className='text-center text-3xl'>Book Service: {title} </h2>
            <form onSubmit={handleBookService} className=" bg-base-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name="name" placeholder="your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$'+ price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-error  btn-block text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;