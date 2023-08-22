'use client';

import * as React from 'react';

interface IToggleHook {
  open: (event: React.SyntheticEvent) => void;
  close: () => void;
}

export const useToggle = (): [(EventTarget & Element) | null, IToggleHook] => {
  const [anchorEl, setAnchorEl] = React.useState<(EventTarget & Element) | null>(null);

  return [
    anchorEl,
    {
      open: React.useCallback((event: React.SyntheticEvent) => setAnchorEl(event.currentTarget), []),
      close: React.useCallback(() => setAnchorEl(null), []),
    },
  ];
};
