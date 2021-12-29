
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 150,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 205,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'},
    {  
      id: 3,
      title: 'Жизнь взаймы',
      author: 'Эрих Мария Ремарк',
      price: 120,
      coverImage: 'https://cdn1.ozone.ru/s3/multimedia-4/wc1200/6095000116.jpg'},
      {  
        id: 4,
        title: 'Время жить и время умирать',
        author: 'Эрих Мария Ремарк',
        price: 220,
        coverImage: 'https://cdn1.ozone.ru/s3/multimedia-v/wc1200/6095000035.jpg'}
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}