import React from "react"
import { Boxes, ChartArea, CirclePlus, Cog, Component, LayoutDashboard, LayoutPanelLeft, Puzzle, Table, TicketCheck } from 'lucide-react';

export default function Dashboard() {
    return <aside className='hidden md:visible bg-white md:flex flex-col gap-4 w-max text-nowrap p-4 h-screen rounded-sm text-sm'>
        <div className='font-semibold flex flex-col gap-2'>
            <h1 className='text-[#003673]'>
                DASHBOARDS
            </h1>
            <div className='px-4 flex flex-row items-center gap-4'>
                <LayoutPanelLeft color="#9ca3af" strokeWidth={1.5} size={24} />
                <p  >Dashboard Example 1</p>
            </div>
        </div>

        {/* UI COMPONENTS */}
        <div className='font-semibold flex flex-col gap-2'>
            <h1 className='text-[#003673]'>
                UI COMPONENTS
            </h1>
            <div className='px-4 flex flex-col gap-4'>

                <button className='flex flex-row items-center gap-4'>
                    <Component size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p  >Elements </p>
                </button>

                <button className='flex flex-row items-center gap-4'>
                    <Puzzle size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p  >Components</p>
                </button>

                <button className='flex flex-row items-center gap-4'>
                    <Table size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p  >Tables</p>
                </button>

            </div>
        </div>

        {/* WIDGETS */}
        <div className='font-semibold flex flex-col gap-2'>
            <h1 className='text-[#003673]'>
                WIDGETS
            </h1>
            <div className='px-4 flex flex-col gap-4'>
                <button className='flex flex-row items-center gap-4'>
                    <Boxes size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p  >Dashboard Boxes</p>
                </button>
            </div>
        </div>

        {/* FORMS  */}
        <div className='font-semibold flex flex-col gap-2'>
            <h1 className='text-[#003673]'>
                FORMS
            </h1>
            <div className='px-4 flex flex-col gap-4'>

                <button className='flex flex-row items-center gap-4'>
                    <Cog size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p>Forms Controls </p>
                </button>

                <button className='flex flex-row items-center gap-4'>
                    <LayoutDashboard color="#9ca3af" strokeWidth={1.5} size={24} />
                    <p>Form Layouts</p>
                </button>

                <button className='flex flex-row items-center gap-4'>
                    <TicketCheck size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p>Forms Validation</p>
                </button>

            </div>
        </div>

        {/* CHARTS */}
        <div className='font-semibold flex flex-col gap-2'>
            <h1 className='text-[#003673]'>
                CHARTS
            </h1>
            <div className='px-4 flex flex-col gap-4'>
                <button className='flex flex-row items-center gap-4'>
                    <ChartArea size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p  >ChartJS</p>
                </button>
            </div>
        </div>

        {/* PRO VERSION */}
        <div className='font-semibold flex flex-col gap-2'>
            <h1 className='text-[#003673]'>
                PRO VERSION
            </h1>
            <div className='px-4 flex flex-col gap-4'>
                <button className='flex flex-row items-center gap-4'>
                    <CirclePlus size={24} color="#9ca3af" strokeWidth={1.5} />
                    <p  >Upgrade to PRO</p>
                </button>
            </div>
        </div>


    </aside>
}

