import { type FC } from 'react';

export const Icon: FC<{
  variant: 'edit' | 'delete' | 'save' | 'cancel';
}> = ({ variant }) => {
  switch (variant) {
    case 'edit':
      return (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736"
            stroke="blue"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
        </svg>
      );
    case 'delete':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z"
            stroke="red"
          />
          <path
            d="M14.625 3.75H3.375"
            stroke="red"
            //    stroke-linecap="round"
          />
          <path
            d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
            stroke="red"
          />
          <path
            d="M10.5 9V12.75"
            stroke="red"
            //   stroke-linecap="round"
          />
          <path
            d="M7.5 9V12.75"
            stroke="red"
            //    stroke-linecap="round"
          />
        </svg>
      );
    case 'save':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 48 48"
        >
          <path
            fill="#43A047"
            d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
          ></path>
        </svg>
      );
    case 'cancel':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="15"
          height="15"
          viewBox="0 0 48 48"
        >
          <path
            fill="#F44336"
            d="M21.5 4.5H26.501V43.5H21.5z"
            transform="rotate(45.001 24 24)"
          ></path>
          <path
            fill="#F44336"
            d="M21.5 4.5H26.5V43.501H21.5z"
            transform="rotate(135.008 24 24)"
          ></path>
        </svg>
      );
  }
};
