import { Popover } from "antd";
import { TooltipPlacement } from "antd/lib/tooltip";
import React from "react";

interface PopdropProps {
  className?: string;
  placement?: TooltipPlacement;
  title: string | React.ReactNode;
  children: any;
}

const Popdrop: React.FC<PopdropProps> = ({
  className,
  placement,
  title,
  children,
}) => {
  return (
    <Popover
      content={children}
      trigger="click"
      overlayClassName={className ? className : "popdrop"}
      placement={placement ? placement : "bottom"}
    >
      {title}
    </Popover>
  );
};

export default Popdrop;
