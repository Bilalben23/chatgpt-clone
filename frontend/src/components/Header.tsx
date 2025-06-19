import { assets } from "@constants/assets";
import { FaChevronDown } from "react-icons/fa";


export default function Header() {
    return (
        <header className='sticky top-0 flex items-center justify-between w-full text-white border'>
            <div>
                <button type="button" className="flex items-center px-3 py-2 leading-relaxed transition rounded-lg cursor-pointer gap-x-2 hover:bg-gray-50/15">
                    ChatGPT
                    <FaChevronDown size={14} className="text-" />
                </button>
            </div>

            <div className="flex items-center gap-x-4">
                <button type="button" className="flex items-center px-4 py-2 transition rounded-full cursor-pointer gap-x-2 hover:bg-gray-50/15">
                    <img
                        src={assets.share}
                        alt="Share Icon"
                        className="size-5"
                    />
                    Share
                </button>

                <button type="button" className="p-1 transition rounded-full cursor-pointer hover:bg-gray-50/15">
                    <img
                        src={assets.organization_logo}
                        alt="Organization Icon"
                        className="size-8"
                    />
                </button>
            </div>
        </header>
    )
}