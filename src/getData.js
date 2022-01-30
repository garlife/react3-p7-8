
export default function getData(){
  return(
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())//response.<метод чтения>() метод возвращает (читает) ответ в требуемом формате . Без этого метода нельзя будет получить данные через метод fetch()
  .then((json) => json.slice(0,3)) //.slice(from, to) в моменте получения ответа от сервера
  )
}