import React from "react";
import { DOMRectContext } from "../../core-react";
import { LeftResizable } from "../Anchored";
import { useBreakpoints } from "../Breakpoints";
import { Fill } from "../Fill";
import { ViewPort } from "../ViewPort";

const BreakpointFeedback: React.FC = () => {
	const bp = useBreakpoints();
	const domRect = React.useContext(DOMRectContext);

	return (
		<div style={{ textAlign: "center" }}>
			<h3>I have 3 breakpoints defined, 200, 300 and 400, 750</h3>
			<p>Active breakpoint: {bp}</p>
			<p>Size: {domRect?.width}</p>
		</div>
	);
};

export const BreakpointTest: React.FC = () => {
	return (
		<ViewPort>
			<LeftResizable size="30%" breakpoints={{ breakpoints: { sm: 200, md: 300, lg: 400, xl: 750 } }} trackSize>
				<BreakpointFeedback />
			</LeftResizable>
			<Fill>I have no breakpoints assigned</Fill>
		</ViewPort>
	);
};
