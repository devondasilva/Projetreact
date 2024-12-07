import React from "react";
import logo from '../assets/assets/logo.png';
import liv from '../assets/assets/liv.jpg';
import Tags from "../tags/tags_list";
import Recent_posts from "../posts/recent_posts";
import Containers from "../components/containers/containers";

export function Living(){                 

    return (
        <div className="App">
            <header>
            <div className=" bg-cover bg-center h-screen" style={{ backgroundImage: `url(${liv})`}}>
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-8 w-auto" src={logo} alt=""/>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <a href="#" className="text-sm/6 font-semibold text-white">About Us</a>
                        <a href="#" className="text-sm/6 font-semibold text-white">Living Room</a>
                        <a href="#" className="text-sm/6 font-semibold text-white">Kitchen</a>
                        <a href="#" className="text-sm/6 font-semibold text-white">Outdoors</a>
                        <a href="#" className="text-sm/6 font-semibold text-white">Contact</a>
                    </div>
                    </nav>
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <div></div>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Close menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About Us</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Living Room</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Kitchen</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Outdoors</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contact</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </header>
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-10xl font-bold tracking-tighter text-white sm:text-7xl">Living Room</h1>
                        <div className="flex text-center">
                            <a href="#" className="text-white">Home</a>
                            <p className="text-white">--Living Room</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>

            <body>
                <div className="wrapper my-5" style={{height:"100%"}}>
                    <div className="col">
                        <div className="row">
                            <div className="col-8 border-end mt-4">
                                <Containers/>
                            </div>
                            <div className="col-4">
                                <div className='d-block mb-4 ms-4 me-4' >
                                    <div className='border p-2 mt-4'>
                                        <input type="text" placeholder='Search...' style={{width:"100%",outline:"none"}}/>
                                        <i className="fi fi-br-search"></i>
                                    </div>
                                </div>
                                <Recent_posts/>
                                <Tags />
                            </div>
                        </div>
                    </div>
                </div>
            </body>

            <footer>
            <div className="bg-black">
                <div className="wrapper pt-4" style={{color: "white", height:"400px"}}>
                    <div className="col pt-4">
                        <div className="row">
                            <div className="col-4 " style={{textAlign:"center"}}>
                                <h3 className="fw-bold mb-4">ABOUT</h3>
                                <p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.</p>
                            </div>
                            <div className="col-4" style={{textAlign:"center"}}>
                                <h3 className="fw-bold mb-4">SOCIAL</h3>
                                <div className="d-flex" style={{textAlign:"center", justifyContent:"center"}}>
                                    <img src="https://websitedemos.net/blog-02/?customize=template" alt="" style={{width:"30px",height:"auto", margin:"5px", color: "white"}}/>
                                    <img src="https://websitedemos.net/blog-02/?customize=template" alt="" style={{width:"30px",height:"auto", margin:"5px", color: "white"}}/>
                                    <img src="facebook.png" alt="" style={{width:"30px",height:"auto", margin:"5px", color: "white"}}/>
                                    <img src="facebook.png" alt="" style={{width:"30px",height:"auto", margin:"5px"}}/>
                                </div>
                            </div>
                            <div className="col-4" style={{textAlign:"center"}}>
                                <h3 className="fw-bold mb-4">CONTACT US</h3>
                                <p >500 Terry Francois St.
                                    <br/> San Francisco,
                                    <br/>CA 94158
                                    <br/>+1-410-555-0134 |
                                    <br/>info@example.com
                                    <br/>contact@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mx-auto max-w-7xl py-5 px-2">
                            <div className="justify-between flex px-8 w-full py-5">
                                <div className="flex items-center text-white justify-center ">
                                    Copyright © 2024 Home Decor | Powered by Home Decor
                                </div>
                                <div className=" lg:flex lg:gap-x-5">
                                    <a href="#" className="text-sm/6 text-white">About Us</a>
                                    <a href="#" className="text-sm/6 text-white">Living Room</a>
                                    <a href="#" className="text-sm/6 text-white">Kitchen</a>
                                    <a href="#" className="text-sm/6 text-white">Outdoors</a>
                                    <a href="#" className="text-sm/6 text-white">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    )
}
