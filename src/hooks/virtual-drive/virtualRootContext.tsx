import { createContext, useContext, FC, ReactNode } from "react";
import { VirtualRoot } from "../../features/virtual-drive/root/virtualRoot";

const VirtualRootContext = createContext<VirtualRoot | undefined>(undefined);

export const VirtualRootProvider: FC<{ children: ReactNode }> = ({ children }) =>  {
	const virtualRoot = new VirtualRoot().init();

	return <VirtualRootContext.Provider value={virtualRoot}>
		{children}
	</VirtualRootContext.Provider>;
};

export function useVirtualRoot(): VirtualRoot {
	return useContext(VirtualRootContext);
}