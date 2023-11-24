import React, { FC, PropsWithChildren, ReactElement, ReactNode } from 'react';

export const Case: FC<PropsWithChildren<{ condition: boolean }>> = ({ children }) => {
  return children;
};

export const Default: FC<PropsWithChildren> = ({ children }) => {
  return children;
};

export const Switch: FC<PropsWithChildren> = ({ children }) => {
  let matchChild: ReactNode = null;
  let defaultCase: ReactNode = null;

  React.Children.forEach<ReactNode>(children, (child) => {
    if (!matchChild && (child as ReactElement).type === Case) {
      const { condition } = (child as ReactElement).props;
      const conditionResult = Boolean(condition);
      if (conditionResult) {
        matchChild = child;
      }
    } else if (!defaultCase && (child as ReactElement).type === Default) {
      defaultCase = child;
    }
  });

  return matchChild ?? defaultCase ?? null;
};
