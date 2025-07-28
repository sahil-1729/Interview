'use client'

import React from 'react';
import { ArrowBigDownDash, ArrowBigUpDash, ArrowDownWideNarrow, CarFront, CircleArrowUp, DollarSign, Star } from 'lucide-react';
import BarChart from './BarChart';
import LineChart from './LineChart';

export default function Graphs() {

    return (
        <div className='w-11/12 px-4 gap-8 flex flex-col py-4'>
            {/* border-red border-solid border-2 */}
            {/* Headline */}
            <div className='flex flex-row justify-between '>
                <div className='flex flex-row gap-8  items-center'>

                    <div className='bg-white shadow-xl'>
                        <CarFront color='#ec4899' strokeWidth={1} size={96} />
                    </div>

                    <div className=''>
                        <h1 className='font-bold text-2xl' >
                            Analytics dashboard
                        </h1>
                        <p>
                            This is an example dashboard created using build in elements
                        </p>
                    </div>

                </div>
                <div className='flex flex-row gap-4'>
                    <div className='flex items-center'>
                        <button className='bg-black p-2 rounded'>
                            <Star color='white' fill='white' size={16} />
                        </button>
                    </div>
                    <div className='flex items-center text-white'>
                        <button className='bg-[#14aaff] rounded px-4 py-2 flex flex-row gap-2'>
                            <CircleArrowUp />
                            <span>buttons</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 3 boxes  */}
            <div className='flex flex-row justify-evenly text-white gap-8 pt-4 pb-2'>
                <div className='bg-gradient-to-r from-[#564f82] to-[#2d587c]
                p-4 rounded flex flex-row justify-between place-items-center w-4/12'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>
                            Total Orders
                        </h1>
                        <p className='font-light'>
                            Last year expenses
                        </p>
                    </div>
                    <span className='font-bold text-3xl'>
                        1896
                    </span>
                </div>

                <div className='bg-gradient-to-r from-[#3bb6ee] via-[#19d7e5] to-[#46b4f2] p-4 rounded flex flex-row justify-between place-items-center w-4/12'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>
                            Clients
                        </h1>
                        <p className='font-thin'>
                            Total Clients Profit
                        </p>
                    </div>
                    <span className='font-bold text-3xl'>
                        $ 568
                    </span>
                </div>

                <div className='bg-gradient-to-r from-[#2cbd84] to-[#19a96a] p-4 rounded flex flex-row justify-between place-items-center w-4/12'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>
                            Followers
                        </h1>
                        <p className='font-thin'>
                            People interested
                        </p>
                    </div>
                    <span className='font-bold text-3xl'>
                        46%
                    </span>
                </div>

            </div>

            {/* graphs */}
            <div className='flex flex-row gap-4 justify-between'>
                <div className='w-6/12 bg-white px-4 pt-4 rounded-sm'>
                    <h1 className='font-semibold text-xl'>
                        SALES REPORT
                    </h1>
                    <BarChart />
                    <div className='py-8'>
                        <h1 className='font-semibold text-xl text-[#9ca3af] pb-2'>
                            TOP AUTHORS
                        </h1>
                        {/* Persons */}
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row place-items-center gap-4'>
                                    <div >
                                        <img src='Person.jpg' className='rounded-full' height={40} width={40} />
                                    </div>
                                    <div>
                                        <div className='font-semibold'>
                                            Rodolfo Hane
                                        </div>
                                        <div className='text-[#9ca3af]'>
                                            Web developer
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 place-items-center'>
                                    <DollarSign color="#9ca3af" size={16} />
                                    <span>129</span>
                                    <ArrowBigDownDash color='red' fill='red' size={16} />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row place-items-center gap-4'>
                                    <div >
                                        <img src='Person3.jpg' className='rounded-full' height={40} width={40} />
                                    </div>
                                    <div>
                                        <div className='font-semibold'>
                                            Marten Alexa
                                        </div>
                                        <div className='text-[#9ca3af]'>
                                            Banker
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 place-items-center'>
                                    <DollarSign color="#9ca3af" size={16} />
                                    <span>64</span>
                                    <ArrowBigUpDash color='green' fill='green' size={16} />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row place-items-center gap-4'>
                                    <div >
                                        <img src='Person2.jpg' className='rounded-full' height={40} width={40} />
                                    </div>
                                    <div>
                                        <div className='font-semibold'>
                                            Adil Hussain
                                        </div>
                                        <div className='text-[#9ca3af]'>
                                            Marketing
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 place-items-center'>
                                    <DollarSign color="#9ca3af" size={16} />
                                    <span>429</span>
                                    <ArrowBigDownDash color='red' fill='red' size={16} />
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex flex-row place-items-center gap-4'>
                                    <div >
                                        <img src='Person4.jpg' className='rounded-full' height={40} width={40} />
                                    </div>
                                    <div>
                                        <div className='font-semibold'>
                                            Lenya Dietzsch
                                        </div>
                                        <div className='text-[#9ca3af]'>
                                            Plumber
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2 place-items-center'>
                                    <DollarSign color="#9ca3af" size={16} />
                                    <span>198</span>
                                    <ArrowBigUpDash color='green' fill='green' size={16} />
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='w-6/12 bg-white px-4 pt-4 rounded-sm max-h-min'>
                    <h1 className='font-semibold text-xl'>
                        BANDWIDTH REPORTS
                    </h1>
                    <LineChart />
                    <div className='py-8'>
                        <div className='flex flex-col gap-8 '>
                            {/* first 2 */}
                            <div className='flex flex-row justify-between gap-20'>
                                <div className='flex flex-col gap-1 w-6/12'>
                                    <div className='flex flex-row justify-between'>
                                        <h1 className='text-2xl font-bold'>
                                            63%
                                        </h1>
                                        <p className='text-[#9ca3af]'>
                                            Generated leads
                                        </p>
                                    </div>
                                    <div className="w-full h-4 mb-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-4 bg-[#d82049] rounded dark:bg-blue-500 w-[63%]"></div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1 w-6/12'>
                                    <div className='flex flex-row justify-between'>
                                        <h1 className='text-2xl font-bold'>
                                            41%
                                        </h1>
                                        <p className='text-[#9ca3af]'>
                                            Generated Leads
                                        </p>
                                    </div>
                                    <div className="w-full h-4 mb-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-4 bg-[#f5b91a] rounded dark:bg-blue-500 w-[41%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between gap-20'>
                                <div className='flex flex-col gap-1 w-6/12'>
                                    <div className='flex flex-row justify-between'>
                                        <h1 className='text-2xl font-bold'>
                                            71%
                                        </h1>
                                        <p className='text-[#9ca3af]'>
                                            Server Authentication
                                        </p>
                                    </div>
                                    <div className="w-full h-4 mb-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-4 bg-[#376cd1] rounded dark:bg-blue-500 w-[71%]"></div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-1 w-6/12'>
                                    <div className='flex flex-row justify-between'>
                                        <h1 className='text-2xl font-bold'>
                                            32%
                                        </h1>
                                        <p className='text-[#9ca3af]'>
                                            Submitted Tickets
                                        </p>
                                    </div>
                                    <div className="w-full h-4 mb-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-4 bg-[#40c87f] rounded dark:bg-blue-500 w-[32%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* result boxes  */}
            <div className='flex flex-row justify-evenly gap-8 pt-4 pb-2'>
                <div className='bg-white shadow
                p-4 rounded flex flex-row justify-between place-items-center w-4/12'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>
                            Total Orders
                        </h1>
                        <p className='font-thin text-[#9ca3af]'>
                            Last year expenses
                        </p>
                    </div>
                    <span className='font-bold text-[#30a06d] text-3xl'>
                        1896
                    </span>
                </div>

                <div className='bg-white shadow p-4 rounded flex flex-row justify-between place-items-center w-4/12'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>
                            Clients
                        </h1>
                        <p className='font-thin text-[#9ca3af]'>
                            Total Clients Profit
                        </p>
                    </div>
                    <span className='font-bold text-3xl text-[#d9b44d]'>
                        $3M
                    </span>
                </div>

                <div className='bg-white shadow p-4 rounded flex flex-row justify-between place-items-center w-4/12'>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>
                            Followers
                        </h1>
                        <p className='font-thin text-[#9ca3af]'>
                            People interested
                        </p>
                    </div>
                    <span className='font-bold text-3xl text-[#810028]'>
                        45.9%
                    </span>
                </div>

            </div>
        </div>)
}