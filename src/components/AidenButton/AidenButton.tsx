import React, { FC } from 'react';
import AidenButtonWrapper from './AidenButton.styled.ts';

interface AidenButtonProps {
   data: {
      title: string;
   }
}

const AidenButton: FC<AidenButtonProps> = ({data}) => (
   
   <AidenButtonWrapper>
   </AidenButtonWrapper>
);

export default AidenButton;


