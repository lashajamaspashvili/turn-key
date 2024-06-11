import styled from 'styled-components';
import tw from 'twin.macro';

export const SRadioGroup = styled.div`
  ${tw`mt-[50px]`}

  .ant-radio {
    &-group {
      ${tw`flex gap-2`}
    }
    &-button-wrapper {
      ${tw`rounded-[12px] border border-solid border-[#1A07451A] px-[15px] py-[9.5px] leading-[unset] font-bold text-[12px] h-auto`}

      ::before {
        ${tw`hidden`}
      }

      :hover {
        ${tw`!border-[#9D71FD] bg-[#9D71FD] text-[#ffffff]`}
      }

      &-checked {
        ${tw`!border-[#9D71FD] bg-[#9D71FD] text-[#ffffff]`}
      }
    }
  }
`;
