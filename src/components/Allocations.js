import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/kamaprofile.png";
import Image from 'next/image';
import {
    Chart as ChartJS,
    AecElement,
    Tooltip,
    Legend
} from 'chart.js';

import Doughnut from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const Allocations = () => {
    const data = {
        labels: ['Yes', 'No'],
        datasets: [{
            label: 'Poll',
            data: [3,6],
            backgroundColor: ['black', 'red'],
            borderColor: ['black', 'red'],
        }]
    }

    const options = {
        
    }
  return (
    <div className='my-64'>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            
            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
            >
                <Doughnut
                    data = {data}
                    options = {options}
                >

                </Doughnut>
            </div>

        </div>
    </div>
  )
}

export default Allocations
