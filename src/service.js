const axios = require("axios");

export const onSubmitService = (url, formData) =>
  axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
