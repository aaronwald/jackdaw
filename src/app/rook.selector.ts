import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RookData } from "./rook.model";

export const selectRook = createFeatureSelector<RookData>("rook");