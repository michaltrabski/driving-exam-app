import styled, { css } from "styled-components";
import { lighten } from "polished";

export const PageBackground = styled.div`
  background: ${({ theme }) => theme.light};
  padding-top: 50px;
  padding-bottom: 150px;
  padding-right: 5px;
  padding-left: 5px;
`;

export const Container = styled.div`
  margin-bottom: 40px;
  width: 100%;
  max-width: ${({ theme }) => theme.pageMaxWidth};
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  background: ${({ theme }) => theme.white};
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.gray400};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-bottom: 5px; */
  flex-direction: column;

  @media (${({ theme }) => theme.tablet}) {
    flex-direction: row;
  }

  ${({ mt10 }) => mt10 && "margin-top: 100px;"};

  ${({ mtAuto }) => mtAuto && "margin-top: auto;"};
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  text-align: center;
  background-color: ${({ light }) => light && "lightgray"};
  text-align: ${({ right }) => right && "right"};
  text-align: ${({ left }) => left && "left"};

  @media (${({ theme }) => theme.tablet}) {
    padding-right: ${({ pr }) => pr && "5px"};
    padding-left: ${({ pl }) => pl && "5px"};
  }

  ${({ between }) => between && "justify-content: space-between;"};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `};

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `};
`;

export const SpaceBeetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Video = styled.video`
  background-color: lightgray;
  border: 4px solid gray;
  max-width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  background-color: lightgray;
  border: 4px solid gray;
  max-width: 100%;
`;

// export const Button = styled.button`
//   display: inline-block;
//   font-weight: 400;
//   text-align: center;
//   vertical-align: middle;
//   user-select: none;
//   padding: 0.375rem 0.75rem;
//   font-size: 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
//     border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

//   width: 100%;
//   display: block;

//   margin-bottom: 1rem;
// `;
