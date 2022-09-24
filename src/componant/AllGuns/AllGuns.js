import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';


const AllGuns = () => {
    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data));
    }, [])
    // console.log(guns);
    return (
        <div>
            <h2 className='text-4xl p-6 font-bold'>There are: {guns.length} guns in Our shopes</h2>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam repellendus qui velit veniam repellat consequatur ipsum voluptatem, aspernatur eligendi autem ipsa maiores ab cumque nisi accusamus. At, aut ipsum.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto'>
                {
                    guns.map(gun => (<SingleGun gun={gun}></SingleGun>))
                }
            </div>
        </div>
    );
};

export default AllGuns;