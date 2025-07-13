"use client";
// import { set } from 'mongoose';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState(false)

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className='h-[54vh] '>


            <div className='mx-auto max-w-lg my-16 bg-purple-100 p-8 rounded-lg flex flex-col  '>
                <h1 className='font-bold text-2xl p-2' >Generate your short URLs</h1>
                {/* <div className=' flex flex-col gap-2 '>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />

                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md bg-white'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className=' mx-auto text-white bg-purple-500 w-1/2 font-bold shadow-lg p-3 py-2 rounded-2xl my-2 '>Generate</button>
            </div> */}
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        value={url}
                        className="px-4 py-2 focus:outline-purple-600 rounded-md bg-white"
                        placeholder="Enter your URL"
                        onChange={(e) => seturl(e.target.value)}
                    />

                    <input
                        type="text"
                        value={shorturl}
                        className="px-4 py-2 focus:outline-purple-600 rounded-md bg-white"
                        placeholder="Enter your preferred short URL text"
                        onChange={(e) => setshorturl(e.target.value)}
                    />

                    <button
                        onClick={generate}
                        disabled={!url.trim() || !shorturl.trim()}
                        className={`mx-auto w-1/2 font-bold p-3 py-2 rounded-2xl my-2 shadow-lg transition ${!url.trim() || !shorturl.trim()
                                ? "bg-purple-300 text-white cursor-not-allowed"
                                : "bg-purple-500 text-white hover:bg-purple-600"
                            }`}
                    >
                        Generate
                    </button>
                </div>
                {generated && <><span className='font-bold text-lg'>Your shortened URL is:</span>
                    <code><Link target="_blank" href={generated}>{generated}</Link>
                    </code></>}
            </div>
        </div>
    )
}

export default Shorten
