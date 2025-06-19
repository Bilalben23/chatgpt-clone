import { assets } from "@constants/assets";
import freshChatSuggestions from "@constants/freshChatSuggestions";

export default function SuggestionsList() {
    return (
        <div>
            <div className="flex items-center justify-center mb-8">
                <img
                    src={assets.logo}
                    alt="ChatGPT Logo"
                    className="size-14"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-8">
                {freshChatSuggestions.map(({ icon, text }, idx) => (
                    <button key={idx} type="button" className="flex flex-col p-3 transition border-2 shadow cursor-pointer rounded-2xl text-start w-52 border-gray-50/5 hover:opacity-95 hover:border-gray-50/40">
                        <img
                            src={icon}
                            className="size-6"
                        />
                        <span className="mt-4 text-sm leading-relaxed text-gray-50/70">{text}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
