export default (url, method, headers = {}, body = {}, form = false) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    const token = localStorage.getItem('token');
    if (token) {
      xhr.setRequestHeader('token', token);
    }

    for (let [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value);
    }
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(new Error(xhr.status));
      } else {
        resolve(JSON.parse(xhr.response));
      }
    };
    if (!form) {
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send(body);
    }
  });
};
