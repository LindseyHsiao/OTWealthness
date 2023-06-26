import facebookIcon from '../assets/images/icon-facebook.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'
import pinterestIcon from '../assets/images/icon-pinterest.svg'
import odalyLogo from '../assets/images/OdalyLogo.png'


export default function Footer(){
    return(
        <footer className="bg-neutral-50">
        {/* <!-- container --> */}
        <div className="container max-w-6xl py-10 mx-auto">
            {/* <!-- footer flex container --> */}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* <!-- menu and logo container  --> */}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-8 pb-10">
                    {/* <!-- logo --> */}
                    <div className="h-8">
                        <img src={odalyLogo} alt="Jan Jennings Logo" className="w-44 md:ml-3"/>
                    </div>
                    
                </div>

                {/* <!-- social and copy container --> */}
                <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                    {/* <!-- icons container --> */}
                    <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
                        {/* <!-- icon 1 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src={facebookIcon} alt="Facebook Icon" className="duration-200 ficon h-6"/>
                            </a>
                        </div>
                        {/* <!-- icon 2 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src={instagramIcon} alt="Instagram Icon" className="h-6"/>
                            </a>
                        </div>
                        {/* <!-- icon 3 --> */}
                        <div className="h-8 group">
                            <a href="#">
                                <img src={pinterestIcon} alt="Pinterest Icon" className="h-6"/>
                            </a>
                        </div>
                    </div>
                    {/* <!-- copy --> */}
                    <div className="font-bold">
                        &copy; 2023 OT Wealthness. All Rights Reserved
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}