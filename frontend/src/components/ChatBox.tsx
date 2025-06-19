import ChatBar from './ChatBar';
import Header from './Header';

export default function ChatBox() {
    return (
        <section className='relative flex flex-col justify-between h-screen max-h-screen px-5 py-2 overflow-y-auto text-white gap-y-3 bg-primary grow'>
            <Header />
            <div className='border grow'>

            </div>

            <ChatBar />
        </section>
    )
}
