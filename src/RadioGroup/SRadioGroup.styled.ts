import styled from 'styled-components';
import tw from 'twin.macro';

export const SRadioGroup = styled.div`
  ${tw`lg:mt-[50px] mt-[21px]`}

  .ant-radio {
    &-group {
      ${tw`flex gap-2`}
    }
    &-button-wrapper {
      ${tw`lg:rounded-[12px] rounded-none border-none lg:border lg:border-solid lg:border-[#1A07451A] px-[15px] py-[9.5px] leading-[unset] font-bold text-[12px] text-[#1A0745] text-center h-auto`}

      ::before {
        ${tw`hidden`}
      }

      :hover {
        ${tw`lg:border-[#9D71FD]! lg:bg-[#9D71FD] lg:text-[#ffffff] text-[#9D71FD]`}
        border-bottom: 1px solid #9D71FD !important;
      }

      &-checked {
        ${tw`lg:border-[#9D71FD]! lg:bg-[#9D71FD] lg:text-[#ffffff] text-[#9D71FD]`}
        border-bottom: 1px solid #9D71FD !important;
      }
    }
  }
`;
