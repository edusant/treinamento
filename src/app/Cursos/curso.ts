export class Curso {

  constructor(code: string, description: string, releaseDate: string,  id: number, name: string, price: number, imageUrl: string, rating: number, duration: number,)
  {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.rating = rating;
    this.duration = duration;
    this.releaseDate = releaseDate
    this.description = description
    this.code = code
  }
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  code: string;
  duration: number;
  rating: number;
  releaseDate: string;
  description: string;
}
