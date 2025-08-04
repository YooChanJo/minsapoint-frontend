import { useLinkProps } from '@react-navigation/native';
import { ReactNode } from 'react';
// import { useState } from 'react';
import { Pressable, PressableProps } from 'react-native';

type LinkButtonProps = {
  screen?: string;
  params?: object;
  action?: any;
  href?: string;
  children?: ReactNode;
} & PressableProps;

/* Actions would be normally ignored or malfunctioned with web use */
export default function LinkWrapper({
  screen = '',
  params = {},
  action,
  href,
  children,
  ...rest
}: LinkButtonProps) {
  const props = useLinkProps({ screen, params, action, href });

  return (
    <Pressable {...props} {...rest}>
      {children}
    </Pressable>
  );
}
