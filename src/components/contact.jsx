
import phone from '../assets/phone-fill.svg'
import mail from '../assets/envelope-bold.svg'
import data from '../data/data'

export default function Contact(){


return (
    <>
        <div className="my-10 flex flex-col items-center">

        <section className='w-[58%]'>
        <h4 className="section-title">Contact</h4>
            <div className="contact content *:flex *:gap-2 font-semibold text-lg mt-3">
            <div className="contacts ">
            <img src={phone} className='h-8' /><div>{data[0].contact[0]}</div>
            </div>
            <div className="contacts">
            <img src={mail} className='h-8' /><div>{data[0].contact[1]}</div>
           </div>
            </div>
        </section>
        </div>
    </>
)

}