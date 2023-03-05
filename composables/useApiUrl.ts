export default () => {
  const { API_URL } = useRuntimeConfig().public;

  const API_LIST = {
    GET_CSR_LIST: `${API_URL}/csr`,
    GET_PRODUCT_LIST: `${API_URL}/product`,
  };

  return {
    API_LIST,
  };
};
