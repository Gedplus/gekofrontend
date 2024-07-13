import { useState, useEffect, useRef } from 'react';
import ProductSlider from './ProductSlider';
import ProductSlidercat2 from './productSliderCat2';
import ProductSlidercat3 from './productSiderCat3';
import ProductSlidercat4 from './productSilderCat4';
import ProductSlidercat5 from './productSildercat5';
import ProductSlidercat6 from './productSlider6';

const TabsComponent = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className='bg-black flex justify-center items-center py-12'>
      <div className='flex   flex-col gap-y-2 w-full p-2 '>
        <div className='bg-[#bb105d] p-1 wrapper1    w-full rounded-xl flex justify-between items-center gap-x-2 font-bold text-white'>
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none border-2 border-white w-full py-4 hover:bg-[#f6a117] rounded-xl text-cneter  focus:bg-white focus:text-[#f6a117] ${
                selectedTab === index ? ' bg-white text-[#f6a117]' : ''
              } `}
            >
             <h2>{item.title}</h2> 
            </button>
          ))}
        </div>

        <div className='bg-white p-2 w-full rounded-xl'>
        
            <div className={`${selectedTab === 0 ? '' : 'hidden'}`}>
            <ProductSlider/>
            </div>
            <div className={`${selectedTab === 1 ? '' : 'hidden'}`}>
            <ProductSlidercat2/>
            </div>
            <div className={`${selectedTab === 2 ? '' : 'hidden'}`}>
            <ProductSlidercat3/>
            </div>
            <div className={`${selectedTab === 3 ? '' : 'hidden'}`}>
            <ProductSlidercat4/>
            </div>
            <div className={`${selectedTab === 4 ? '' : 'hidden'}`}>
            <ProductSlidercat5/>
            </div>
            <div className={`${selectedTab === 5 ? '' : 'hidden'}`}>
            <ProductSlidercat6/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;