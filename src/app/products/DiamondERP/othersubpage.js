import React from 'react'
import Bureldehuun from '../components/json/Bureldehuun'

export default function Othersubpage({ isDetails }) {
    if (!isDetails) {
        return (
            <div className='w-full h-auto bg-slate-100 flex justify-center'>
                <NiitBureldeguun Bureldehuun={ Bureldehuun }/>
            </div>
        )
    } else {
        return
    }
}

function BureldehCom(props) {
    return (
        <div className='w-[50%] xl:w-[45%] 2xl:w-2/5 h-44 relative flex items-center justify-center'>
            <button className='w-[65%] h-36'>
                <a href={ props.href}>
                    <div className='w-full md:h-[45%] flex flex-row   '>
                        <div className='px-[5%] w-auto h-auto'><img src={ props.img } className='aspect-square h-full' /></div>
                        <h2 className='flex items-center h-full w-auto font-extrabold text-[18px] text-blue-900'>{ props.name }</h2>
                    </div>
                    <div className='bg-blue-900 h-[2px]'></div>

                    <div className='w-full h-[54%] relative'>
                        <div className='w-full h-5/6 absolute bottom-0'>
                            <p className='text-[14px] text-left'> { props.desc } </p>
                        </div>
                    </div>
                </a>
            </button>
        </div>
    )
}

function NiitBureldeguun(props) {
    return (
        <div className='w-full flex justify-center flex-col'>
            {Array.from({ length: Math.ceil(props.Bureldehuun.length / 2) }).map((_, rowIndex) => (
                <div key={rowIndex} className="flex justify-center">
                    {props.Bureldehuun.slice(rowIndex * 2, rowIndex * 2 + 2).map((comp, i) => (
                        <BureldehCom key={i} name={comp["name"]} img={comp["img"]} desc={comp["desc"]} href={ comp["href"] } />
                    ))}
                </div>
            ))}
        </div>

    )
}