import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Provision from '../assets/Provision3.jpg';
import { Menu, X } from 'lucide-react';

function HomeScreen() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className='nav-bar bg-slate-500 h-14 flex items-center px-8 justify-between'>
                <button className='md:hidden text-white' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className='hidden md:flex gap-4'>
                    <button onClick={() => navigate('/dashboard')} className="bg-orange-300 hover:bg-orange-500 transition duration-300 text-white px-4 py-2 rounded">Home</button>
                    <button onClick={() => navigate('/dashboard/about')} className='bg-orange-300 hover:bg-orange-500 text-white px-4 py-2 rounded'>About</button>
                    <button onClick={() => navigate('/dashboard/carriers')} className='bg-orange-300 hover:bg-orange-500 transition duration-200 text-white px-4 py-2 rounded'>Carriers</button>
                </div>
                <button onClick={() => navigate('/')} className='bg-orange-300 hover:bg-green-400 transition duration-300 text-white px-4 py-2 rounded'>Login</button>
            </div>
            {menuOpen && (
                <div className='md:hidden flex flex-col items-center bg-slate-600 py-4 gap-2'>
                    <button onClick={() => navigate('/dashboard')} className="bg-orange-300 hover:bg-orange-500 transition duration-300 text-white px-4 py-2 rounded w-40">Home</button>
                    <button onClick={() => navigate('/dashboard/about')} className='bg-orange-300 hover:bg-orange-500 text-white px-4 py-2 rounded w-40'>About</button>
                    <button onClick={() => navigate('/dashboard/carriers')} className='bg-orange-300 hover:bg-orange-500 transition duration-200 text-white px-4 py-2 rounded w-40'>Carriers</button>
                </div>
            )}

            <marquee className="bg-gray-200 p-4" behavior="scroll" direction="left" scrollamount="5">
                <img src={Provision} alt="Sample" className="h-40 w-40 rounded-lg shadow-lg" />
            </marquee>
        </div>
    );
}

export default HomeScreen;