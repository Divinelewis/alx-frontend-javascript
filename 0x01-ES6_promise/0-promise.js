function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    reject(Error('API not currently working'));
  });
}

export default getFullResponseFromAPI;
