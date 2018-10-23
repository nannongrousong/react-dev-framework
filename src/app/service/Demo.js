import request from 'APP_UTILS/request';

export const List_Demo_Data = (params) => request('/Demo', params);
export const Add_Demo_Data = (params) => request('/Demo', params, 'POST');
export const Edit_Demo_Data = (params) => request('/Demo', params, 'PUT');
export const Del_Demo_Data = (params) => request('/Demo', params, 'DELETE');