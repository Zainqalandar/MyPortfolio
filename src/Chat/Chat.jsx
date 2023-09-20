import { useState, useEffect, useRef, useContext } from 'react'
// import './App.css'
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import InitContext from '../Context/InitContext';
import backgroun from '../assets/img/Banner-bg.png'

function Chat() {
    // All Hooks
    let { data } = useContext(InitContext)
    const [photo, setPhoto] = useState()
    const [chats, setChats] = useState([])
    const [meg, setMeg] = useState('')

    const database = getDatabase();
    const chatListRef = ref(database, 'CHATs');
    const chatRef = push(chatListRef);

    let updatHeight = () => {
        let el = document.getElementById('scoll')
        if (el) {
            el.scrollTop = el.scrollHeight
        }
    }
    const UseRef = useRef(null)
    useEffect(() => {
        if (UseRef.current) {
            UseRef.current.focus()
        }

    }, [data.user])

    useEffect(() => {

        onChildAdded(chatListRef, (data) => {
            setChats(chats => [...chats, data.val()])
            setTimeout(() => {
                updatHeight()
            }, 100);
        });

    }, [])

    let sandMeg = () => {
        set(chatRef, {
            Name: data.Name,
            Message: meg,
            Email: data.User
        });
        setMeg('')
    }
    return (
        <>
            {data.User ? (
                <div>
                    {/* User Info */}
                    <div className='text-white bg-slate-900'>
                        <img
                            className='w-10 rounded-full float-left m-2'
                            src={data.Photo}
                            alt=""
                        />
                        <h1 className='text-2xl'>{data.Name}</h1>
                        <i className='block'>online</i>
                    </div>

                    {/* Chat Messages */}
                    <div id='scoll'
                        style={{ backgroundImage: `url(${backgroun})` }}
                        className='app chat-container pt-14 h-[80vh] overflow-y-scroll'>
                        {chats.map((c, i) => (
                            <div
                                key={i}
                                className={`container flex ${c.Name === data.Name ? 'flex-row-reverse' : ''}`}
                            >
                                <p
                                    className={`chatbox border-2 border-gray-400 ${c.Name === data.Name
                                        ? 'bg-gradient-radial text-white bg-gradient-center bg-gradient-no-repeat bg-gradient-contain rounded-lg p-4'
                                        : 'ml-7 bg-white text-black rounded-r-full rounded-tl-full'
                                        } p-4 my-2 bg-bisque `}
                                >
                                    {c.Name !== data.Name && (
                                        <i>
                                            <i className='text-red-400 text-sm'>
                                                {c.Name !== data.Name && `+92*********`}
                                                {c.Name !== data.Name && <i className='text-slate-400 ml-1'>~{c.Name}</i>}
                                            </i>
                                            <br />
                                        </i>
                                    )}
                                    <strong>{c.Name} </strong>
                                    {c.Message}
                                </p>
                            </div>
                        ))}

                        {/* Message Input */}
                        {/* // ... (previous code) */}

                        <div className='border border-red-900 bg-slate-950 p-3 fixed text-white w-full flex bottom-0'>
                            <input
                                ref={UseRef}
                                className='rounded-lg p-1 flex-grow bg-slate-800 text-white'
                                type="text"
                                placeholder='Send Message....'
                                value={meg}
                                onInput={e => setMeg(e.target.value)}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        sandMeg();
                                    }
                                }}
                            />
                            {/* Send Button */}
                            <button className="material-symbols-outlined m-2" onClick={() => sandMeg()}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>


    )
}

export default Chat