export default () => {
  const { API_URL } = useRuntimeConfig().public;

  const API_LIST = {
    GET_CSR_LIST: `${API_URL}/csr`,
    GET_PRODUCT_LIST: `${API_URL}/product`,
    GET_GALLERY_LIST: `${API_URL}/gallery`,
    GET_VISION: `${API_URL}/vision-mission`,
    GET_HOME_VIEW: `${API_URL}/home-view`,
    GET_TEAMS: `${API_URL}/team`,
    GET_TEAM_GROUP: `${API_URL}/team-group`,
    GET_DIRECTOR: `${API_URL}/director`,
  };

  return {
    API_LIST,
  };
};
