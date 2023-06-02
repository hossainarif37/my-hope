import bg from '../../assets/images/counter_bg.jpg'

const GetInvolved = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, }} className="text-center ">
            <div className='bg-black bg-opacity-60 py-20'>
                <h1 className=" text-4xl font-bold pb-2 border-b-4 border-opacity-60 border-accent inline-block mb-10 text-[#ddd]">Get Involve</h1>
                <div className="text-[#ddd]">
                    <h1 className="text-4xl font-bold">We are helping people from 10 years</h1>
                    <h3 className="font-semibold text-xl mt-2">Become a part of us by donating a little amount</h3>
                </div>
                <div className="flex justify-center gap-10 pt-10">
                    {/* <button className="btn border-none bg-[#dc7443]">About Us</button>
                <button className="btn border-none bg-[#dc7443]">Join Us</button>
                <button className="btn border-none bg-[#dc7443]">Donate/Payment</button> */}
                    <button className="btn btn-outline btn-accent text-white">About Us</button>
                    <button className="btn btn-outline btn-accent text-white">Donate/Payment</button>
                    <button className="btn btn-outline btn-accent text-white">View Our Events</button>
                    <button className="btn btn-outline btn-accent text-white">Join Us</button>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;