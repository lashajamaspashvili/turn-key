import styled from 'styled-components';
import tw from 'twin.macro';

export const SCard = styled.div`
  ${tw`bg-[#F2EFFE] lg:w-[380px] w-[323px] lg:h-[268px] h-[240px] lg:px-10 px-2.5 lg:pt-[70px] pt-[63px] box-border border-2 border-solid border-[#9D71FD] rounded-[24px] flex flex-col items-center relative`}
`;

export const STitle = styled.h1`
  ${tw`m-0 font-bold text-[#1A0745] text-[18px]`}
`;

export const SDescription = styled.p`
  ${tw`m-0 mt-1.5 font-normal text-[#5F517D] text-[14px]`}
`;

export const SText = styled.p`
  ${tw`m-0 mt-5 font-normal text-[#1A0745] text-[16px] text-center`}
`;

export const SPhotoContainer = styled.div`
  ${tw`w-[86px] h-[86px] absolute top-[-30px] rounded-[10px]`}

  img {
    ${tw`w-full h-full rounded-[10px]`}
  }
`;
