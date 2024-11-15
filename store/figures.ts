import {create} from "zustand";

interface IUseFigures {
    showFigures: boolean;
    toggleFigures: () => void;
}

const useFigures = create<IUseFigures>((set) => ({
    showFigures: true,
    toggleFigures: () => set((state) => ({showFigures: !state.showFigures}))
}));

export {
    useFigures
}
