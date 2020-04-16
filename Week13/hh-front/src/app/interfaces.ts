export interface Vacancy {
    id: number, 
    name: string,
    salary: number,
}

export interface Company {
    id: number,
    name: string,
    vacancies: Vacancy[]
}

export class LoginResponse {
    token: string;
}