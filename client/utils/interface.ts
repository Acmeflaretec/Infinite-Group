export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
  request?: any;
}

export interface CareersData<T = any> {
  docs: T;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number;
  nextPage?: number;
}

export interface JobData {
  _id: string;
  title: string;
  location: string;
  type: string;
  pay: string;
  summary: string;
  linkedin_url: string;
  workingConditions: string[];
  jobRequirements: string[];
  dutiesAndResponsibilities: string[];
  createdAt: string;
  updatedAt: string;
}
export interface ContactData {
  name: string;
  email: string;
  resume: string;
}
