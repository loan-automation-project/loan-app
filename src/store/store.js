import { configureStore } from '@reduxjs/toolkit';
import applicantReducer from './slices/ApplicantSlice';
import authReducer from './slices/AuthSlice';
import creditLimitReducer from './slices/CreditLimitSlice';

const store = configureStore({
  reducer: {
    applicant: applicantReducer,
    auth: authReducer,
    creditLimit: creditLimitReducer,
  },
});

export default store;
