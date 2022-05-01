import axios from '../../src/api/axios/axios'

const get = async () => {
    return await axios.get("/hello");
};

export { get };