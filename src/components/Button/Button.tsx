import React from 'react';
import * as S from './Button.styles';
type Props = {
  children?: JSX.Element | (JSX.Element | string)[] | string;
  handler: () => void;
};
export default function Button({ handler, children }: Props) {
  return <S.Button onClick={handler}>{children}</S.Button>;
}
