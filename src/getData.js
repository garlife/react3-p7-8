
export default function getData(){
  return(fetch('https://jsonplaceholder.typicode.com/posts'))
  .then((response) => response.json()) //response.{формат данных} метод возвращает ответ в требуемом формате. Без этого метода нельзя будет получить данные через метод fetch()
}