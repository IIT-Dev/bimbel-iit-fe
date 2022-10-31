import React from "react"
import {DetailLayananKami} from "../../data/homepage";
import {OurServices} from "../../data/our-services";

export const ProductsItem = () => {
    return(
        <div className="w-full mx-auto px-5 pb-10 ">
            <div className="text-center max-w-xl mx-auto text-gray-100">
                <h1 className="text-5xl md:text-6xl font-bold mb-5">Layanan Kami</h1>
                <h3 className="text-xl font-medium mb-10">{DetailLayananKami}</h3>
            </div>
            <div className="w-full md:flex mb-5">
                {/*<div*/}
                {/*    className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">*/}
                {/*    <div className="w-full flex-grow">*/}
                {/*        <h2 className="text-center font-bold uppercase mb-4">PERSONAL</h2>*/}
                {/*        <h3 className="text-center font-bold text-4xl mb-2">$5*/}
                {/*            <span className="text-lg">/mo</span>*/}
                {/*        </h3>*/}
                {/*        <p className="text-center font-bold mb-5">*/}
                {/*            <a href="#"*/}
                {/*               className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read*/}
                {/*                more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>*/}
                {/*        </p>*/}
                {/*        <ul className="text-sm px-5 mb-8">*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*    <div className="w-full">*/}
                {/*        <button*/}
                {/*            className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy*/}
                {/*            Now*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:my-3 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">*/}
                {/*    <div className="w-full flex-grow">*/}
                {/*        <h2 className="text-center font-bold uppercase mb-4">TEAM</h2>*/}
                {/*        <h3 className="text-center font-bold text-3xl md:text-4xl mb-2">$15<span*/}
                {/*            className="text-lg">/mo</span></h3>*/}
                {/*        <p className="text-center font-bold mb-5">*/}
                {/*            <a href="#"*/}
                {/*               className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read*/}
                {/*                more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>*/}
                {/*        </p>*/}
                {/*        <ul className="text-sm px-5 mb-8">*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Consectetur*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Adipisicing*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Elit repellat*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*    <div className="w-full">*/}
                {/*        <button*/}
                {/*            className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy*/}
                {/*            Now*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">*/}
                {/*    <div className="w-full flex-grow">*/}
                {/*        <h2 className="text-center font-bold uppercase mb-4">PRO</h2>*/}
                {/*        <h3 className="text-center font-bold text-4xl md:text-5xl mb-2">$35<span*/}
                {/*            className="text-lg">/mo</span></h3>*/}
                {/*        <p className="text-center font-bold mb-5">*/}
                {/*            <a href="#"*/}
                {/*               className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read*/}
                {/*                more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>*/}
                {/*        </p>*/}
                {/*        <ul className="text-sm px-5 mb-8">*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Consectetur*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Adipisicing*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Much more...*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*    <div className="w-full">*/}
                {/*        <button*/}
                {/*            className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Buy*/}
                {/*            Now*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div*/}
                {/*    className="w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-3 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">*/}
                {/*    <div className="w-full flex-grow">*/}
                {/*        <h2 className="text-center text-3xl font-bold uppercase mb-2">ENTERPRISE</h2>*/}
                {/*        <p className="text-center font-bold mb-5">*/}
                {/*            <a href="#"*/}
                {/*               className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block">Read*/}
                {/*                more<i className="mdi mdi-arrow-right-thick ml-1"></i></a>*/}
                {/*        </p>*/}
                {/*        <ul className="text-sm px-5 mb-8">*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Consectetur*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Adipisicing*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Sed do eiusmod*/}
                {/*            </li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Aliquip ex</li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Excepteur</li>*/}
                {/*            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Dolor sit amet**/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*    <div className="w-full">*/}
                {/*        <button*/}
                {/*            className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Enquire*/}
                {/*            Now*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {
                    OurServices.map((d,i)=>(
                        <div
                            className={`w-full md:w-1/4 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:${i>0&&i<3?'-':''}my-${i==0?'6':'3'} ${i==1??'md:my-3'} ${i==2??'md:mb-0'} rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col `+ (i==1||i==2?"md:relative md:z-50":"")}>
                            <div className="w-full flex-grow">
                                <h2 className="text-center font-bold uppercase mb-4">{d.packageName}</h2>
                                <h3 className="text-center font-bold text-4xl mb-2">Rp{d.price}
                                    <span className="text-lg">/{d.measurement}</span>
                                </h3>
                                <p className="text-center font-bold mb-5">
                                    <a href="#"
                                       className="hover:underline hover:text-gray-700 transition-all transform hover:scale-110 inline-block"><i className="mdi mdi-arrow-right-thick ml-1"></i></a>
                                </p>
                                <ul className="text-sm px-5 mb-8">
                                    {
                                        d.benefit.map((b)=>(
                                            <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {b}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="w-full">
                                <button
                                    className={`font-bold ${d.buttonEnabled?"bg-green-600":"bg-gray-600"} ${d.buttonEnabled??"hover:bg-green-400"} text-white rounded-md px-10 py-2 transition-colors w-full`} disabled={!d.buttonEnabled} onClick={(e)=>{
                                        e.preventDefault()
                                        window.location.href = d.hyperlink ?? "#"
                                }}>{d.buttonText}
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="text-center max-w-xl mx-auto">
                <p className="text-xs leading-tight">Presented Inkubator IT HMIF ITB, 2022. Made with love ♡</p>
            </div>
        </div>
    )
}