// declare module '*.svg' {
//   const content: any;
//   export default content;
// }

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}

declare module '*.png' {
  const content: any;
  export default content;
}
