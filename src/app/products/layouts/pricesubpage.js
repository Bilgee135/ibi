import React from 'react'

export default function Pricesubpage({ isDetails, data, tableinfo }) {
    const tsvData = `№	Системийн жагсаалт	Модулийн үнэ
    1	НЯГТЛАН БОДОХ БҮРТГЭЛИЙН СИСТЕМ	5,060,000₮
        Ерөнхий журнал, гүйлгээний модуль	450,000₮
        Мөнгөн хөрөнгийн модуль	500,000₮
        Авлага, өглөгийн модуль	820,000₮
        Бараа материалын модуль	810,000₮
        Үндсэн хөрөнгийн модуль	810,000₮
        Хангамжийн материалын модуль	450,000₮
        Зардлын модуль	410,000₮
        Тайлангийн модуль	810,000₮
    2	ЦАЛИНГИЙН ТООЦООНЫ СИСТЕМ	2,060,000₮
    3	ДЭЛГҮҮРИЙН УДИРДЛАГЫН СИСТЕМ	3,270,000₮
        Дэлгүүрийн удирдлага	1,630,000₮
        Дэлгүүрийн ПОС програм	810,000₮
        Хөнгөлөлтийн картын програм	830,000₮
    4	РЕСТОРАНЫ УДИРДЛАГЫН СИСТЕМ	3,330,000₮
        Рестораны удирдлага	1,940,000₮
        Рестораны ПОС	560,000₮
        Хөнгөлөлтийн картын програм	830,000₮
    5	БОРЛУУЛАЛТ ТҮГЭЭЛТИЙН СИСТЕМ *	4,770,000₮
        Борлуулалт түгээлтийн удирдлага	3,540,000₮
        Борлуулалтын бүртгэл (Android Pocket PC)	650,000₮
        Бөөний төвийн борлуулалт	580,000₮
    6	ЗОЧИД БУУДЛЫН МЕНЕЖМЕНТИЙН СИСТЕМ	2,810,000₮
        Зочид буудлын удирдлага	2,200,000₮
        Ресепшин Front Office систем	610,000₮`;
    if (isDetails != 2) {
        return
    }
    let tableinfodemo = tableinfo["heading"] ? tableinfo["heading"] : ""
    let additionalinfodemo = tableinfo["additionalinfo"] ? tableinfo["additionalinfo"] : ""
    return (
        <div className='h-auto w-[80%] mx-[10%]'>
            <div className='mb-[16px] mt-[35px]'>
                <h1 className='flex text-3xl md:text-4xl text-blue-500 font-opensans font-bold'> {tableinfodemo} </h1>
            </div>
            <div className='mt-[10px] w-full lg:w-2/3 '>
                <p className='font-normal text-black text-base text-md md:text-lg'>
                    {additionalinfodemo}
                </p>
            </div>
            <TsvToHtmlTable tsvData={ tsvData } />
        </div>
    )
}

const TsvToHtmlTable = ({ tsvData }) => {
    const rows = tsvData.split('\n');
    const tableData = rows.map((row, index) => {
      const cells = row.split('\t');
      const isFirstValueNumber = !isNaN(Number(cells[0]));
      let rowClassName = isFirstValueNumber ? 'bg-blue-200 text-black font-semibold text-base' : 'text-black';

      if (index === 0) {
        rowClassName = 'bg-blue-400 text-black font-bold text-[18px]'
      }
  
      if (!isFirstValueNumber && index != 0) {
        cells.unshift(''); // Add an empty cell as the first cell for rows without numbers
      }
      return (
        <tr key={index} className={rowClassName}>
          {cells.map((cell, cellIndex) => (
            <td key={cellIndex} className="px-6 py-4 whitespace-nowrap">
              {cell.trim()}
            </td>
          ))}
        </tr>
      );
    });
  
    return (
      <table className="mt-[50px] mb-[150px] table-auto border-collapse border border-gray-200">
        <tbody>{tableData}</tbody>
      </table>
    );
  };