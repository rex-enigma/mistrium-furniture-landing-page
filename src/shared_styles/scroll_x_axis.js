import { css } from '@emotion/react';


export const scrollXStyle = css`
display: flex;
justify-content: flex-start;
align-items: center;
overflow-x: auto;
padding: 0px;
list-style-type: none;

//hide scrollbar but keep functionality
//for chrome, safari and opera
&::-webkit-scrollbar{
    display: none;
}

//hiding scrollbar for edge & firefox
-ms-overflow-style:none; // IE & edge
scrollbar-width: none; //firefox
`;