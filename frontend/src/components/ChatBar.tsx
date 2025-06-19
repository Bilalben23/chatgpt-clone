import SearchInput from './SearchInput'

export default function ChatBar() {
    return (
        <div className='sticky bottom-0 flex flex-col items-center justify-center w-full py-1 mx-auto mt-2 gap-y-2'>
            <SearchInput />
            <p className='text-xs text-gray-300'>ChatGPT can make mistakes. Check important info.</p>
        </div>
    )
}
