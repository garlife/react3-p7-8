
export default function getData(){
  return(fetch('https://jsonplaceholder.typicode.com/posts'))
  .then((response) => response.json())
}