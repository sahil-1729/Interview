import { ChartBar } from 'lucide-react';
import { Presentation } from 'lucide-react';
import { Settings } from 'lucide-react';
import { UserPen } from 'lucide-react';

const Header = () => {
    return (<header className=" bg-gradient-to-r from-[#61bcff] to-[#23e7ff] flex justify-between text-white">
        <div className="flex gap-4 p-4">
            <button className='flex flex-row gap-2 items-center'>
                <ChartBar size={16} />
                <span>
                    Statistics
                </span>
            </button>
            <button className='flex flex-row gap-2  items-center'>
                <Presentation size={20} />
                <span>
                    Projects
                </span>
            </button>

            <button className='flex flex-row gap-2  items-center'>
                <Settings size={20} />
                <span>
                    Settings
                </span>
            </button>
        </div>
        <div className='flex gap-4 p-4 items-center'>
            <img className='rounded-full' src='Person4.jpg' alt='Profile picture' width={40} height={40}/>
            <div className='flex flex-col'>
                <span className='font-bold'>
                    Jane Doe
                </span>
                <p className='text-sm'>Manager</p>
            </div>

        </div>
    </header>)
}

export default Header