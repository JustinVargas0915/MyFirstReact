import httpclient from "../commons/httpclient";

const getEmployees = () =>{
    return httpclient.get('/employees');
}
const postEmployee = (data) =>{
    return httpclient.post('/employees', data)
}


export default {getEmployees, postEmployee}