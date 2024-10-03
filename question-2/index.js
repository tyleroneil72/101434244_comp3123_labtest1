const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "delayed success!" });
    }, 500);
  });
};

resolvedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// Did not throw error to match output given
const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject({ error: "delayed exception!" });
    }, 500);
  });
};

rejectedPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
