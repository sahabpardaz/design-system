import * as React from 'react';
import { createSvgIcon } from '../mui';

export const MoreCircle2 = createSvgIcon(
  <React.Fragment>
    <path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8.004v-.01M12 12.005v-.01M12 16.006v-.01"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'MoreCircle2',
);