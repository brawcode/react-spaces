import React, { useEffect, useState } from "react";
import { SizeUnit } from "src/core-types";

export interface PersistenceLayoutProps {
	name: string;
}

type SaveFunc = (key: string, size: SizeUnit) => void;
type GetFunc = (params: { key?: string; fallback: SizeUnit }) => SizeUnit | undefined;

export interface PersistentLayoutContext {
	save: SaveFunc;
	get: GetFunc;
}

export interface SavedLayout {
	[key: string]: SizeUnit;
}

const Context = React.createContext<PersistentLayoutContext>({
	save: (key: string, size: SizeUnit) => {},
	get: ({fallback}) => fallback,
});

const PersistentLayout: React.FC<PersistenceLayoutProps> = ({ name, children }) => {
	const [savedLayout, setSavedLayout] = useState<SavedLayout>({});

	useEffect(() => {
		const layout = localStorage.getItem(name);
		if (layout) setSavedLayout(JSON.parse(layout));
		else setSavedLayout({});
	}, []);

	useEffect(() => {
		localStorage.setItem(name, JSON.stringify(savedLayout));
	}, [savedLayout]);

	const save: SaveFunc = (key: string, sizeUnit: SizeUnit) => {
		setSavedLayout((old) => ({ ...old, [key]: sizeUnit }));
	};

	const get: GetFunc = ({ key, fallback }) => {
		if (!key) return fallback;
		return savedLayout[key] || fallback;
	};

	return <Context.Provider value={{ save, get }}>{children}</Context.Provider>;
};

export const usePersistentLayout = (): PersistentLayoutContext => React.useContext(Context)

export default PersistentLayout;
