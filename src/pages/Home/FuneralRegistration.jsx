import funeralLogo from '../../assets/images/Funeral-Logo.png'
import image1 from '../../assets/images/funeral/image1.jpg'
import image2 from '../../assets/images/funeral/image2.jpeg'
import image3 from '../../assets/images/funeral/image3.jpeg'
import image4 from '../../assets/images/funeral/image4.jpeg'
import image5 from '../../assets/images/funeral/image5.jpeg'

const FuneralRegistration = () => {
    const images = [
        { title: 'Funeral', img: image1 },
        { title: 'Application Form', img: image2 },
        { title: 'Terms & Condition', img: image3 },
        { title: 'FAQ', img: image4 },
        { title: 'Aim & Objectives', img: image5 },
    ];
    return (
        <div className='py-10 border-t'>
            <div className='text-center pb-7'>
                <img className='w-40 mx-auto' src={funeralLogo} alt="" />
                <p className='font-semibold mt-4 border p-2 border-accent inline-block text-accent rounded-xl'>
                    Please click the Registration form below to Download and Complete, <br />
                    then send to <i className='font-bold'>funeral@myhope.org.au</i> with Attachments.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-3 px-14'>
                {
                    images.map(({ img, title }) => <> <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className='w-40 h-52' src={img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="text-center text-xl font-bold ">{title}</h2>
                            <div className="flex gap-3 justify-center">
                                <button className="btn text-white btn-sm">View</button>
                                <button className="btn btn-outline btn-accent text-white btn-sm">Download</button>
                            </div>
                        </div>
                    </div> </>)
                }
            </div>
        </div>
    );
};

export default FuneralRegistration;