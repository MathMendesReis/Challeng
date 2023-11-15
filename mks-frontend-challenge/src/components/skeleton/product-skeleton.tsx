// components/ProductSkeleton.js
import React from 'react';
import styled from 'styled-components';

import { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    background-color: rgba(200, 200, 200, 0.5);
  }
  50% {
    background-color: rgba(200, 200, 200, 0.8);
  }
  100% {
    background-color: rgba(200, 200, 200, 0.5);
  }
`;


const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  width: 218px;
  height: 285px;
  background-color: rgba(200, 200, 200, 0.5);
  animation: ${pulseAnimation} 1.5s infinite; 
`;

const SkeletonImage = styled.div`
  width: 147.857px;
  height: 138px;
  background-color: #ccc; /* Cor de fundo do esqueleto */
  margin-bottom: 8px;
`;

const SkeletonText = styled.div`
  
  background-color: #ccc; /* Cor de fundo do esqueleto */
  margin-bottom: 8px;
`;

const ProductSkeleton = () => {
  return (
    <SkeletonContainer>
      
    </SkeletonContainer>
  );
};

export default ProductSkeleton;
