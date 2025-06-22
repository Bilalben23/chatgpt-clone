import ChatBar from './ChatBar';
import Header from './Header';
import SuggestionsList from './SuggestionsList';


export default function ChatBox() {
    return (
        <section className='relative flex flex-col justify-between flex-1 h-screen max-h-screen px-5 py-2 overflow-y-auto text-white gap-y-3 bg-primary'>
            <Header />
            <div className='flex items-center justify-center grow'>
                <SuggestionsList />
            </div>

            <ChatBar />
        </section>
    )
}
