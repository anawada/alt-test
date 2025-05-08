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
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-16">
                <img src={verox} alt="verox" />
                <img src={microsoft} alt="microsoft" />
                <img src={hp} alt="hp" />  
                <img src={cx} alt="3cx" />
                <img src={vipre} alt="vipre" />
                <img src={fortinet} alt="fortinet" />
            </div>
        </div>
    )
}

