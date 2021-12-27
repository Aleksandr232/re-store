
export default class BookstoreService {

  data=[
    {
      id: 1,
      title: 'Идеальнный программист',
      author: 'Роберт Мартин',
      price: 636,
      coverImage: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1200/6013258831.jpg'}, 
    {
      id: 2,
      title: 'Жизнь взаймы',
      author: 'Эрих Мария Ремарк',
      price: 360,
      coverImage: 'https://cdn1.ozone.ru/s3/multimedia-3/wc1200/6067392975.jpg'
    },
  ];


  getBooks() {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(this.data)
      }, 700);
    });
  }

}