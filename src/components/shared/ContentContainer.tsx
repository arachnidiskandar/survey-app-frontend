import styled, { css } from 'styled-components';

export const ContentContainer = styled.div(
  ({ theme: { colors, spacing } }) => css`
    display: flex;
    flex: auto;
    background-color: #fff;
    border: solid 1px ${colors.borderColor};
    border-radius: 10px;
    padding: ${spacing(4)};
  `
);
