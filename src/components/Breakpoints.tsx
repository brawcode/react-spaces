import React, { useEffect, useState } from "react";
import { BreakpointMap, BreakpointProps } from "../core-types";

export interface BreakpointProviderProps {
	domRect?: DOMRect;
	breakpoints?: BreakpointProps;
}

export interface BreakpointContext {
	breakpoint?: string;
}

const Context = React.createContext<BreakpointContext>({});

const orderBreakpoints = (breakpoints?: BreakpointMap) => {
	if (!breakpoints) return null;
	return Object.entries(breakpoints)
		.sort(([, v1], [, v2]) => {
			return v1 < v2 ? -1 : 1;
		})
		.reduce<BreakpointMap>((obj, current) => {
			const [k, values] = current;
			obj[k] = values;
			return obj;
		}, {});
};

const BreakpointProvider: React.FC<BreakpointProviderProps> = ({ children, domRect, breakpoints }) => {
	const sortedBreakpoints = React.useRef<BreakpointMap | null>(orderBreakpoints(breakpoints?.breakpoints));
	const [activeBreakpoint, setActiveBreakpoint] = useState<string>();

	useEffect(() => {
		if (!breakpoints) return;
		if (!sortedBreakpoints.current) return;
		if (!domRect) return;

		const newBreakpoint = Object.entries(sortedBreakpoints.current).reduce((lastMatchingBreakpoint, current) => {
			const [breakpointKey, size] = current;
			if (domRect.width >= size) return breakpointKey;
			return lastMatchingBreakpoint;
		}, activeBreakpoint || sortedBreakpoints[0]);

		if (newBreakpoint === activeBreakpoint) return;
		setActiveBreakpoint(newBreakpoint);
	}, [domRect]);

	useEffect(() => {
		if (!activeBreakpoint) return;
		breakpoints?.onBreakpointHit?.(breakpoints[activeBreakpoint]);
	}, [activeBreakpoint]);

	return <Context.Provider value={{ breakpoint: activeBreakpoint }}>{children}</Context.Provider>;
};

export const useBreakpoints = (): string | undefined => {
	const ctx = React.useContext(Context);
	return ctx.breakpoint;
};

export default BreakpointProvider;
