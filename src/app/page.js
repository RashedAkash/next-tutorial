"use client"
import { useRouter } from 'next/navigation';

import React from 'react';

const page = () => {
const router = useRouter()
  const goTo = () => {
   router.push('/product?name=mobile&price=200')
}
  return (
    <div>
      <button onClick={goTo}>Click</button>
    </div>
  );
};

export default page;