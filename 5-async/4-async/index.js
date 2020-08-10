async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const result = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
    document.writeln(JSON.parse(result).name);
  } catch (e) {
    console.error(e);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
