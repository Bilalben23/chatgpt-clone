import React from 'react'
import SearchInput from './SearchInput'

export default function ChatBar() {
    return (
        <div className='sticky flex items-center justify-center w-full p-5 mx-auto mt-2 border bottom-2'>
            <SearchInput />

        </div>
    )
}
