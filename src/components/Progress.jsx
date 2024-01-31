'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Progress = () => {
  return (
    <div>
        <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: true }}
          shallowRouting
        />
    </div>
  );
};

export default Progress;