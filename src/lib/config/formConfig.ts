import { schoolInfo } from "./schoolInfo"; 

export const formConfig = {
  maxChildrenPerInquiry: 2,
  fieldVisibility: {
    childDOB: true, // use date picker
    instrumentSelection: true,
    contactPreference: false,
  },
  programInterestOptions: [
    ...schoolInfo.instrumentsOffered,
    "Not sure yet"  
  ],
  
};