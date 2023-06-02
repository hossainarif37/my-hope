import bg from '../../assets/images/counter_bg.jpg'

const Projects = () => {
    const projectsInfo = [
        {
            quantity: 7,
            title: "Running Projects",
        },
        {
            quantity: 42,
            title: "Happy Volunteers",
        },
        {
            quantity: 14,
            title: "Years Experience",
        },
        {
            quantity: 4,
            title: "Success Projects",
        },
    ]
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'content', backgroundPosition: 'top' }} >
            <div className=' text-[#ddd] text-center py-32 bg-[#122033] bg-opacity-80'>
                <h1 className=" text-4xl font-bold pb-2 border-b-4 border-opacity-60 border-accent inline-block">Projects</h1>
                <div className='flex justify-center mt-10 gap-20'>
                    {
                        projectsInfo.map(({ quantity, title }) => <>
                            <div className='text-center'>
                                <h1 className='text-4xl font-bold mb-3'>{quantity}+</h1>
                                <p className='font-bold text-accent opacity-90'>{title}</p>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;