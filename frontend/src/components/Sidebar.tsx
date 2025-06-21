import { assets } from "@constants/assets";
import { chatTitles } from "@constants/chatTitles";
import { useSidebar } from "@hooks/useSidebar";

export default function Sidebar() {
    const { toggleSidebar, isSidebarOpen } = useSidebar();

    return (
        <aside className={`bg-secondary md:translate-x-0 justify-between flex flex-col h-screen p-2.5 md:w-56 lg:w-64 text-white transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>

            <div>
                <div className='flex items-center justify-between'>
                    <button type="button" className="p-2 transition rounded-lg cursor-pointer hover:bg-primary">
                        <img src={assets.logo}
                            alt="logo"
                            className="size-6"
                        />
                    </button>
                    <button type="button" className="p-2 transition rounded-lg cursor-pointer opacity-70 hover:bg-primary" onClick={toggleSidebar}>
                        <img src={assets.sidebar_toggle}
                            alt="sidebar toggle"
                            className="size-6"
                        />
                    </button>
                </div>

                <div className="mt-4">
                    <button type="button" className="flex items-center w-full p-2 transition rounded-lg cursor-pointer gap-x-2 hover:bg-primary">
                        <img src={assets.new_chat}
                            alt="New Chat"
                            className="size-6"
                        />
                        <p className="text-sm font-light">New Chat</p>
                    </button>
                </div>

                <div className="mt-4">
                    <a
                        href="https://sora.chatgpt.com/explore"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Explore Sora ChatGPT"
                        className="flex items-center justify-between w-full p-2 transition rounded-lg cursor-pointer group hover:bg-primary"
                    >
                        <div className="flex items-center gap-x-2">
                            <img src={assets.video_play}
                                alt="Video Play"
                                className="size-6"
                            />
                            <p className="text-sm font-light">Sora</p>
                        </div>
                        <img
                            src={assets.arrow_up}
                            alt="Arrow Left"
                            className="hidden rotate-45 group-hover:block"
                        />
                    </a>
                </div>
                <div>
                    <button type="button" className="flex items-center w-full p-2 transition rounded-lg cursor-pointer gap-x-2 hover:bg-primary">
                        <img src={assets.menu}
                            alt="Menu"
                            className="size-6"
                        />
                        <p className="text-sm font-light">GPTs</p>
                    </button>
                </div>
            </div>


            <div className="relative px-1 mt-4 overflow-auto grow scrollbar-thin">
                <p className="sticky top-0 p-1 text-sm font-light text-gray-300/80 bg-secondary">Chats</p>
                <ul className="flex flex-col">
                    {chatTitles.map((title, index) => (
                        <li key={index} className="text-sm font-light">
                            <button type="button" className="w-full p-2 transition rounded-lg cursor-pointer text-start hover:bg-primary">
                                <span className="line-clamp-1">{title}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-2">
                <button type="button" className="flex items-center w-full p-2 rounded-lg cursor-pointer gap-x-2 group hover:bg-primary">
                    <div className="p-2 border rounded-full shadow group-hover:border-secondary border-primary w-fit">
                        <img
                            src={assets.invite_users}
                            alt="Invite Users"
                            className="size-4"
                        />
                    </div>
                    <p className="text-sm font-light">Invite members</p>
                </button>
            </div>

        </aside>
    )
}
