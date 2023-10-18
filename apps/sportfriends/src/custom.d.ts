import { SerializedError } from '@reduxjs/toolkit/query';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare global {
  interface SerializedError {
    // Your additional error properties here
    data?: { errors: string[] };
  }
}
