import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const SProjectsSection = styled.div`
  ${tw`flex lg:flex-row flex-col lg:mt-20 mt-10`}
`;

export const SProjectsContainer = styled.div`
  ${tw`flex flex-col lg:gap-5 gap-2.5 mt-5 lg:mt-0`}
`;

type LineProps = {
  active?: boolean;
};

export const Left = styled.div`
  ${tw`w-[120px] relative`}
`;

export const SaplingStart = styled.div<LineProps>`
  ${tw`w-[60px] top-[40px] h-[50px] rounded-tr-[18px] absolute`}

  border-top: 2px solid #D7CFFD;
  border-right: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const SaplingEnd = styled.div<LineProps>`
  ${tw`w-[60px] top-[90px] ml-[60px] h-[50px] rounded-bl-[18px] absolute`}

  border-left: 2px solid #D7CFFD;
  border-bottom: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const Workday = styled.div<LineProps>`
  ${tw`w-[121px] top-[140px] h-0.5 bg-[#D7CFFD] absolute`}

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!bg-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const XeroStart = styled.div<LineProps>`
  ${tw`w-[60px] top-[190px] h-[50px] rounded-br-[18px] absolute`}

  border-bottom: 2px solid #D7CFFD;
  border-right: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const XeroEnd = styled.div<LineProps>`
  ${tw`w-[60px] top-[140px] ml-[60px] h-[50px] rounded-tl-[18px] absolute`}

  border-left: 2px solid #D7CFFD;
  border-top: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const Right = styled.div`
  ${tw`w-[120px] relative`}
`;

export const RipplingStart = styled.div<LineProps>`
  ${tw`w-[60px] top-[40px] ml-[60px] h-[50px] rounded-tl-[18px] absolute`}

  border-top: 2px solid #D7CFFD;
  border-left: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const RipplingEnd = styled.div<LineProps>`
  ${tw`w-[60px] top-[90px] h-[50px] rounded-br-[18px] absolute`}

  border-right: 2px solid #D7CFFD;
  border-bottom: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const Expensify = styled.div<LineProps>`
  ${tw`w-[121px] top-[140px] h-0.5 bg-[#D7CFFD] absolute`}

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!bg-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const ZenefitsStart = styled.div<LineProps>`
  ${tw`w-[60px] top-[190px] ml-[60px] h-[50px] rounded-bl-[18px] absolute`}

  border-bottom: 2px solid #D7CFFD;
  border-left: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;

export const ZenefitsEnd = styled.div<LineProps>`
  ${tw`w-[60px] top-[140px] h-[50px] rounded-tr-[18px] absolute`}

  border-right: 2px solid #D7CFFD;
  border-top: 2px solid #d7cffd;

  ${(props) => {
    if (props.active) {
      return css`
        ${tw`!border-[#9D71FD] z-10`}
      `;
    }
  }}
`;
