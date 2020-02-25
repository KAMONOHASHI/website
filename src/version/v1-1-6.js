exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      "version": "1.1.6",
      "releaseDate": "2020/02/14"
    })
  };
};