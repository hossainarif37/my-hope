const NewsLetter = () => {
    return (
        <div className='py-16 bg-[#0d1724]'>
            <div className='text-center mb-10'>
                <h3 className="text-accent text-xl font-semibold">Newsletter</h3>
                <h1 className="text-4xl text-white">Stay up to date</h1>
            </div>
            <div className='flex flex-col w-[450px] mx-auto gap-4'>
                <input type="email" placeholder="Email Address" className="input w-full" />
                <input type="text" placeholder="Subject" className="input w-full " />
                <textarea className="textarea" rows='4' placeholder="Your Message"></textarea>
                <input className="btn btn-outline btn-accent font-semibold text-sm w-[120px] mx-auto mt-3" type="submit" value="Submit" />
            </div>
        </div>
    );
};

export default NewsLetter;