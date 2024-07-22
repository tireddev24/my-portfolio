
import phone from '../assets/phone-fill.svg'
import mail from '../assets/envelope-bold.svg'
import data from '../data/data'

export default function Contact(){


return (
    <>
        <h4 className="contact title">Contact</h4>
            <div className="contact content">
            <div className="contacts">
            <img src={phone} height={30} /><div>{data[0].contact[0]}</div>
            </div>
            <div className="contacts">
            <img src={mail} height={40} /><div>{data[0].contact[1]}</div>
            </div>
            </div>
    </>
)

}