import { createGlobalState } from "react-hooks-global-state";

const initialState = { users: [] };
export const { useGlobalState } = createGlobalState(initialState);
