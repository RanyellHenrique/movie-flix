export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUri: string;
    synopsis: string;
    genre?: Genre;
    reviews?: Review[];
}

export type Genre = {
    id: number;
    name: string;
}

export type Review = {
    id: number;
    text: string;
	user: User;
	movieId: number;
}

export type User = {
    id : number;
	name: string;
	email: string;
	password?: string;
	roles?: Role[];
	reviews: Review[];
}

export type MovieResponse = {
    content: Movie[];
    totalPages: number;
}

export type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';