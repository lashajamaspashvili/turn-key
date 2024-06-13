import styled from 'styled-components';
import tw from 'twin.macro';

export const SContainer = styled.div`
  ${tw`box-border mx-auto lg:w-[1440px] w-[375px] lg:px-[130px] px-[25px] lg:pt-20 pt-[50px] flex flex-col items-center`}
`;

export const SHeader = styled.h1`
  ${tw`font-bold lg:text-[64px] text-[36px] m-0 text-[#1A0745] text-center`}
`;

export const SDescription = styled.p`
  ${tw`font-normal lg:text-[18px] text-[16px] m-0 mt-6 lg:max-w-[680px] max-w-[270px] text-[#5F517D] text-center`}
`;
