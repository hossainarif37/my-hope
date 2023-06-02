import rohingya from '../../assets/images/funeral/rohingya.jpg'

const DonationRohingya = () => {
    return (
        <div style={{ backgroundImage: `url(${rohingya})` }} className="hero " >
            <div className='bg-black opacity-90 px-20 py-20' >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={rohingya} className="max-w-lg rounded-lg shadow-2xl border-2 border-opacity-90 border-accent" />
                    <div className='pr-16 text-[#ddd]'>
                        <h1 className="text-4xl font-bold">Help Rohingya Refugee Camp in Bangladesh</h1>
                        <h1 className='py-5 leading-6 '>
                            <span className="font-bold">The plight of hundreds of thousands of Rohingya people is said to be the world's fastest growing refugee crisis. </span>
                            Risking death by sea or on foot, nearly 700,000 have fled the destruction of their homes and persecution in the northern Rakhine province of Myanmar (Burma) for neighbouring Bangladesh since August 2017.
                        </h1>
                        <button className="btn btn-outline btn-accent mt-3">Donation/Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationRohingya;