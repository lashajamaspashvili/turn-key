import styled, { css } from 'styled-components';
import tw from 'twin.macro';

type SProjectProps = {
  active?: boolean;
};

export const SProject = styled.div<SProjectProps>`
  ${tw`lg:w-[280px] w-[324px] h-20 p-4 box-border border-2 border-solid border-[#E8E6EC] rounded-[12px] flex items-center justify-between`}

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD]`}
      `;
    }
  }}

  .ant-switch {
    .ant-switch-handle {
      ${tw`flex items-center`}
      ::before {
        ${tw`bg-[#A39CB5] w-2 h-2 top-0.5 left-0.5`}
      }
    }
    .ant-switch-inner {
      ${tw`bg-[#fff] border-2 border-solid border-[#A39CB5]`}
    }
    &-checked {
      .ant-switch-inner {
        ${tw`!bg-[#9D71FD] !border-[#9D71FD]`}
      }
      .ant-switch-handle {
        ::before {
          ${tw`!bg-[#fff]`}
        }
      }
    }
  }
`;

export const LeftContent = styled.div`
  ${tw`flex gap-2 items-center`}
`;

export const SPhotoContainer = styled.div`
  ${tw`w-[48px] h-[48px] rounded-[12px]`}

  img {
    ${tw`w-full h-full rounded-[12px]`}
  }
`;

export const STitle = styled.h1`
  ${tw`m-0 font-bold text-[16px] text-[#1A0745]`}

  line-height: 25.6px
`;

export const SDescription = styled.p`
  ${tw`m-0 font-normal text-[12px] text-[#5F517D]`}
`;
