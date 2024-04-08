
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../types';

interface JobsState {
  jobs: Job[];
  filterTerm: string;
}

const initialState: JobsState = {
  jobs: [],
  filterTerm: '',
};

const jobsSlice = createSlice({
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

export const { setJobs, setFilterTerm } = jobsSlice.actions;

export default jobsSlice.reducer;
