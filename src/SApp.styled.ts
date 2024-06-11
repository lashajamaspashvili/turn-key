import styled from 'styled-components';
import tw from 'twin.macro';

export const SContainer = styled.div`
  ${tw`box-border mx-auto w-[1440px] px-[130px] pt-20 flex flex-col items-center bg-[#d7d7d7]`}
`;

export const SHeader = styled.h1`
  ${tw`font-bold text-[64px] m-0 text-[#1A0745]`}
`;

export const SDescription = styled.p`
  ${tw`font-normal text-[18px] m-0 mt-6 max-w-[680px] text-[#5F517D] text-center`}
`;
