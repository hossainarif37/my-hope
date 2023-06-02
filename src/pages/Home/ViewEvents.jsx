import bg from '../../assets/images/counter_bg.jpg'

const ViewEvents = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, }} className="flex justify-evenly items-center py-16">
            <div className="text-white">
                <h1 className="text-4xl font-bold mb-3">We are helping people from 10 years</h1>
                <h3 className="font-semibold text-xl">Become a part of us by donating a little amount</h3>
            </div>
            <button className="btn btn-outline btn-accent text-white ">View Our Events</button>
        </div>
    );
};

export default ViewEvents;