import bg from '../../assets/images/counter_bg.jpg'
import volunteer from '../../assets/images/funeral/volunteers.png'

const Volunteers = () => {
    return (
        <div style={{ backgroundImage: `url(${volunteer})` }}>
            <div className='bg-[#122033] opacity-95 text-center py-32'>
                <h1 className="text-[#ddd] text-4xl font-bold pb-2 border-b-4 border-opacity-60 border-accent inline-block">Volunteers</h1>
                <div className='flex justify-around items-center mt-14'>
                    <div className=' text-[#ddd] text-left'>
                        <h1 className="text-4xl font-bold mb-3">Become a Volunteer</h1>
                        <p>INCREASE IN THE AWARENESS AMONG PEOPLE ABOUT VARIOUS ISSUES</p>
                    </div>
                    <button className="btn btn-outline btn-accent capitalize">Become Volunteer</button>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;