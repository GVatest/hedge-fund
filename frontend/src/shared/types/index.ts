export type Section = {
  id: string;
  label: string;
  iconSrc: string;
};

export type SuccessResponse = {
  success: string;
};

export type ErrorResponse = {
  data?: {
    error?: string;
    detail?: string;
  };
  status?: number;
};
