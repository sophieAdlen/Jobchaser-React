import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../types';

interface JobState {
  jobs: Job[];
  filterTerm: string;
}

const initialState: JobState = {
  jobs: [],
  filterTerm: '', 
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
    },
    setFilterTerm(state, action: PayloadAction<string>) {
      state.filterTerm = action.payload;
    },
  },
});

export const { setJobs, setFilterTerm } = jobSlice.actions;

export default jobSlice.reducer;