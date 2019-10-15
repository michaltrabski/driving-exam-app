import styled, { css } from "styled-components";

export const PageBackground = styled.div`
  background: ${props => props.theme.light};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  margin-bottom: 40px;
  width: 100%;
  max-width: 1200px;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;

  ${({ bottom }) =>
    bottom &&
    css`
      margin-top: auto;
    `};
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  text-align: center;
  background-color: ${({ light }) => light && "lightgray"};
  text-align: ${props => props.right && "right"};
  text-align: ${({ left }) => left && "left"};
  padding-right: ${({ pr }) => pr && "5px"};
  padding-left: ${({ pl }) => pl && "5px"};

  ${props =>
    props.flex &&
    css`
      display: flex;
      flex-direction: column;
    `};
`;

export const SpaceBeetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const H5 = styled.h5`
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

export const QuestionText = styled(H5)`
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: lightgray;
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
