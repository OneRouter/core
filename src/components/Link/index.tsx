import React from "react";
import type { GestureResponderEvent } from "react-native";
import type { To, RelativeRoutingType } from "react-router";
import { A } from "@expo/html-elements";
import { useHref } from "../../shared";
import { useLinkHandler } from "../Router";

export const Link = ({
  children,
  onPress,
  relative,
  reloadDocument,
  replace = false,
  state,
  target,
  to,
  ...rest
}: {
  children?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  reloadDocument?: boolean;
  replace?: boolean;
  state?: any;
  target?: string;
  relative?: RelativeRoutingType;
  to: To;
}) => {
  let href = useHref(to, { relative });
  let internalOnPress = useLinkHandler(to, {
    replace,
    state,
    relative,
  });
  function handlePress(event: GestureResponderEvent) {
    if (onPress) onPress(event);
    if (!event.defaultPrevented) {
      internalOnPress(event);
    }
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <A
      {...rest}
      href={href}
      onPress={reloadDocument ? onPress : handlePress}
      target={target}
    >
      {children}
    </A>
  );
};
