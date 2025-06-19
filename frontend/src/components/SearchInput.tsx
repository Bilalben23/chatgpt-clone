import { assets } from "@constants/assets";
import { FaArrowUp } from 'react-icons/fa';



export default function SearchInput() {
    return (
        <div className="flex items-center w-full max-w-3xl px-3 rounded-4xl gap-x-3 bg-gray-50/8">
            <div className="shrink-0">
                <label htmlFor="file" className="block transition hover:opacity-90 p-2.5 rounded-full cursor-pointer hover:bg-primary" role="button">
                    <img
                        src={assets.clip}
                        alt="Clip"
                        className="size-5"
                    />
                </label>
                <input type="file" id="file" hidden />
            </div>
            <div className="grow">
                <div contentEditable className="w-full max-w-2xl p-4 overflow-y-auto max-h-56 scrollbar-thin focus:outline-none"></div>
            </div>

            <div className="shrink-0">
                <button
                    type="button"
                    className="p-2.5 transition hover:opacity-90 hover:shadow-none shadow bg-white group disabled:cursor-not-allowed rounded-full cursor-pointer disabled:opacity-40"
                >
                    <FaArrowUp className="text-black group-disabled:opacity-50 size-4" />
                </button>
            </div>
        </div>
    )
}
