import verox from '../assets/clientLogos/verox.svg'
import microsoft from '../assets/clientLogos/microsoft.svg'
import hp from '../assets/clientLogos/hp.svg'
import cx from '../assets/clientLogos/3cx.svg'
import vipre from '../assets/clientLogos/vipre.svg'
import fortinet from '../assets/clientLogos/fortinet.svg'

export default function Clients() {
    return (
        <div className="container mx-auto px-4 my-24">
            <p className="text-center mb-12">Our Clients include:</p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-12">
                <img src={verox} alt="Client 1" />
                <img src={microsoft} alt="Client 2" />
                <img src={hp} alt="Client 3" />  
                <img src={cx} alt="Client 4" />
                <img src={vipre} alt="Client 5" />
                <img src={fortinet} alt="Client 6" />
            </div>
        </div>
    )
}

