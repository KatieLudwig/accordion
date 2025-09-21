import { createContext } from "react";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGloblState({ children }) {

    return <FeatureFlagsContext.Provider value={{}}>
        {children}
    </FeatureFlagsContext.Provider>
}