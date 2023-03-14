export default () => {
  const { API_URL } = useRuntimeConfig().public;

  const API_LIST = {
    GET_CSR_LIST: `${API_URL}/csr`,
    GET_PRODUCT_LIST: `${API_URL}/product`,
    GET_GALLERY_LIST: `${API_URL}/gallery`,
  };

  return {
    API_LIST,
  };
};
