import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  applicants: [],
};

const applicantSlice = createSlice({
  name: 'applicant',
  initialState,
  reducers: {
    addApplicant(state, action) {
      state.applicants.push(action.payload);
    },
  },
});

export const { addApplicant } = applicantSlice.actions;
export default applicantSlice.reducer;
