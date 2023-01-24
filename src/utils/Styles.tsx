import styled from 'styled-components';

type ThProps = {
  align?: string;
};

export const Th = styled.th<ThProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 1.1rem;
  text-align: ${(props) => props.align || 'left'};
  color: #808080;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  white-space: nowrap;
  &:last-child {
    padding-right: 0px;
  }
  padding-left:1rem;
`;
export const Td = styled.td`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.1rem;
  color: #808080;
  padding-right: 1.5rem;
  padding-bottom: 2.2rem;
  text-align: ${(props) => props.align || 'left'};
  border-bottom: 0.5px solid #c4c4c4;
  padding-top: 2.2rem;
  &:last-child {
    padding-right: 0px;
  }
  padding-left:1rem;
`;

export const Table = styled.table`

  border-collapse: collapse;
  width: 100%;
  tbody {
    tr {
      &:hover {
        cursor: pointer;
        background: #f2f2f2;
      }
      &:last-child {
        ${Td} {
          border: none;
        }
      }
    }
  }
`;

export const MainScreenStyle = styled.div`
  marging: auto;
  padding: 100px;
`;


export const ImgStyle = styled.img`
width : 150px;
padding-left:15px;
`;
