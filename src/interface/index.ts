export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
}

export interface ISmallCard {
    title: string;
    icons: string;
  }

export interface IFlashSaleCard {
    image: string;
    price: string;
  }

export interface ITrendyProductsCard {
    image: string;
    sale: string;
    title: string;
  }