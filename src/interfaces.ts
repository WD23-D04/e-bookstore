export interface IBook {
  id: number;
  title: string;
  author: string;
  price: number;
  categories: string[];
  image: string;
}

export interface IUser {
  fullName: string;
  userName: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    chatchPhrase: string;
  };
  picture: string;
}
