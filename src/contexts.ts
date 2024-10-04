import { createContext } from 'react';
import { MaterialType } from "./data/materials";

export const MaterialContext = createContext<MaterialType | null>(null);
export const AuthContext = createContext(null);