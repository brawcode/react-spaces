import { ICommonProps, SizeUnit, Type } from "../core-types";
import * as React from "react";
import { Space } from "./Space";
import * as PropTypes from "prop-types";
import { commonProps } from "../core-react";
import { useLayoutSerializer } from "./LayoutSerializer";

interface IFixedProps extends ICommonProps {
	width?: SizeUnit;
	height: SizeUnit;
}

export const Fixed: React.FC<IFixedProps> = ({ width, height, children, ...commonProps }) => {
	const { get } = useLayoutSerializer();
	return (
		<Space {...commonProps} type={Type.Fixed} position={{ width: get({ key: commonProps.i, fallback: width }), height: height }}>
			{children}
		</Space>
	);
};

Fixed.propTypes = {
	...commonProps,
	...{
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	},
};
