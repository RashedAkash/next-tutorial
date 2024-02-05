import Sidebar from '@/components/Sidebar';
import React from 'react';

const layout = ({children}) => {
  return (
    <div className=' grid grid-cols-12 gap-6'>
      <div className=' col-span-3'>
        <Sidebar />
      </div>
      <div className=' col-span-9'>
        {children}
      </div>
    </div>
  );
};

export default layout;