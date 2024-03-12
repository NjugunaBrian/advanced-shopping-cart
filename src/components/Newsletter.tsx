import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { SetStateAction, useState } from "react";


export function Newsletter() {

    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    }

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }


    return (
        <section className="bg-[#212121] text-white p-10">
            <div className="flex flex-col md:flex-row gap-10 md:justify-between">
                <div className="flex flex-col gap-3">
                    <div>
                        <h5 className="font-normal text-base">NEW TO THIS SITE</h5>
                        <p>Subscribe to our newsletter to get on our latest offers!</p>
                    </div>
                    <div className="flex">

                        <div className="flex items-center justify-center bg-white text-black rounded h-10 px-5">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "black" }} />
                            <input id='email' value={email} type='email' placeholder='Email' onChange={handleChange} className='bg-transparent outline-none placeholder: mx-2' required />
                        </div>
                        <div className="mx-5">
                            <button className="p-2 rounded border">Subscribe</button>
                        </div>
                    </div>
                    <div className="text-xs align-items-center">
                        <label>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckChange}
                            />
                            I agree to Upside's Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex gap-3">
                        <img src="/public/images/Upside logo.jpg" className="rounded h-10" />
                        <p>DOWNLOAD UPSIDE FREE APP</p>
                    </div>
                    <div className="flex gap-3">
                        
                            <button className="border p-1 rounded text-xs w-36 flex items-center" onClick={() => window.location.href = 'https://www.applestore.com'}>
                                <FontAwesomeIcon icon={faApple} className="h-7" />
                                <p>Download on <span>Apple Store</span></p>
                            </button>
                        

                        <button className="border p-1 rounded text-xs w-36 flex items-center" onClick={() => window.location.href = 'https://www.googleplaystore.com'}>
                            <FontAwesomeIcon icon={faGooglePlay} className="h-7" />
                            <p>Get it on <span>Play Store</span></p>
                        </button>

                    </div>
                </div>
            </div>


        </section>
    )
}
