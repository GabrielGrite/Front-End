const zipCodeService = ({ baseUrl }) => {
  const resolve = zipCode => {
    const sanitizedZipCode = zipCode.replace(/\D/g, "");

    return fetch(`${baseUrl}/${sanitizedZipCode}/json`)
      .then(response => response.json())
      .then(response => {
        return {
          zipCode: response.cep,
          address: response.logradouro,
          state: response.uf,
          city: response.localidade,
          error: response.erro,
        };
      })
      .catch(err => {
        return { error: true };
      });
  };

  return { resolve };
};

export default zipCodeService({
  baseUrl: process.env.REACT_APP_ZIP_CODE_API_BASE_URL,
});
