import fetch from 'node-fetch';

export class BakalariClient {
  public constructor() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
