import axios from 'axios';
import config from '../config.json';

const { TOKEN } = config;

const api = axios.create({
    BASE_URL: `https://crudcrud.com/api/${TOKEN}`,
});

export default api;

/*export const getEmployeesList = () => {
    return api.get(`/nutemployee/`);
  };
  
  export const getEmployeeDetail = (id) => {
    return api.get(`/nutemployee/${id}`);
  };
  
  export const addEmployee = (employeeData) => {
    return api.post(`/nutemployee/`, employeeData);
  };
  
  export const updateEmployee = (id, employeeData) => {
    return api.put(`/nutemployee/${id}`, employeeData);
  };
  
  export const deleteEmployee = (id) => {
    return api.delete(`/nutemployee/${id}`);
  };
  */