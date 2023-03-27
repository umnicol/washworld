export interface Location {
    id: number;
    name: string;
    status: string;
  }

  export interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    program: number;
    location: string;
  }
  
  export interface Camera {
    id: number;
    status: string;
    location: string;
  }
  