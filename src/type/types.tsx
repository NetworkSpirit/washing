export interface Photos {
    id: number,
    title: string,
    url: string
}
export interface Posts {
    id: number,
    title: string, 
    body: string,
    img: Photos
}
export interface Filters {
    typeVinyl?: string, 
    priceMin?: number,
    priceMax?: number,
    genre?: string,
    yearMin?: number,
    yearMax?: number,
    label?: string
}
export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
    weight: number;
    archived: boolean;
    stock: number;
    quantity: number;
}
export interface Merch {
    id: string;
    name: string;
    price: number;
    image: string;
    type: number;
    weight: number;
    archived: number;
    stock: number;
    quantity: number;
    typeMerch: string;
}

interface tracklistType {
    position: string;
    title: string;
    duration: string;
}
export interface Vinyls {
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
    weight: number;
    archived: number;
    stock: number;
    quantity: number;
    discogsUrl: string;
    condition: string;
    year: string;
    country: string;
    format: string[];
    genre: string[];
    style: string[];
    label: string[];
    artist: string[];
    title: string;
    tracklist: tracklistType[];
    videos: string[];
}

export interface Book {
    id: string;
    name: string;
    price: number;
    image: string;
    type: string;
    weight: number;
    archived: number;
    stock: number;
    quantity: number;
    year: string;
    genre: string[];
    publisher: string;
}


export interface Dictionaries {
    title: string;
}