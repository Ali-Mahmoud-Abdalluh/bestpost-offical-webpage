import { search, arrowDownBlack } from "../assets"
import { useState } from 'react'
import { filterMenu } from "../constants";

const Search = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="max-w-[570px] flex flex-row jusitfy-ceneter items-stretch h-[56px] drop-shadow-lg">
                <div className="flex flex-row justify-center items-center px-[4px] ss:px-[7px] py-[10px] bg-[#F5F5F5] rounded-bl-[6px] cursor-pointer select-none min-w-[50px]" onClick={() => setToggle(!toggle)}>
                    <p className="font-normal leading-[37px] font-[20px] mr-[6px]">All</p>
                    <img src={arrowDownBlack} alt="arrow down icon" className="w-[12px] h-[6.81px]" />
                </div>

                <form>
                    <input type="text" placeholder="Search Here ..." className="sm:min-w-[430px] max-w-[430px] w-[200px] font-normal font-[18px] min-h-full px-2 focus:outline-none" />
                </form>

                <div className="bg-[#FCC320] px-[5px] ss:px-[15px] justify-center items-center flex rounded-br-[6px] min-w-[50px]">
                    <img src={search} alt="search icon" className="min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px] sm:max-w-[32px] sm:max-h-[32px]" />
                </div>
            </div>
            <div className={`w-[770px] mt-[12px] p-[24px] bg-[#FFFFFF] rounded-[6px] drop-shadow-xl ${!toggle && 'hidden'}`}>
                {
                    filterMenu.map((menu) =>
                        <div key={Object.keys(menu)[0]} className="">
                            <h2 className="font-[24px] leading-[44.98px] font-bold">{Object.keys(menu)[0]}</h2>
                            <div className="min-w-full bg-[#061F37] min-h-[1px] max-h-[1px] rounded-full mb-2" />
                            <ul className="grid grid-rows-4 grid-flow-col gap-1">
                                {Object.values(menu)[0].map((item) => <li key={item} className="font-normal font-[18px] text-start flex items-center  hover:bg-[#FCC320] pl-2">{item}</li>)}
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Search