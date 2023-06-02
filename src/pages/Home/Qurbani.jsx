import bg from '../../assets/images/counter_bg.jpg'


const Qurbani = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-no-repeat'>
            <div className="bg-black bg-opacity-70 flex justify-around py-32 items-center border-t border-accent">
                <h1 className="text-5xl font-bold text-[#ddd] border border-accent rounded-xl p-4 font-serif text-center">Qurbani <br /> Appeal 2023</h1>
                <button className="btn btn-accent btn-outline">Registration for Qurbani</button>
            </div>
        </div>
    );
};

export default Qurbani;