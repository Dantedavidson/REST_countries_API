import React from 'react';
import Header from '../Header/Header';
import * as S from './Layout.styles';

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
