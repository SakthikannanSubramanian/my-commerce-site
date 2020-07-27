import { createSelector } from "reselect";

export const directoryState = (state) => state.directory;

export const selectDirectory = createSelector(
  [directoryState],
  (directory) => directory
);
