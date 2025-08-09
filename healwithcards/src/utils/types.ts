export interface Slide {
     heading: string;
    subHeading: string;
  }

export interface Service extends Slide{
    img: string;
    price: number;
  }