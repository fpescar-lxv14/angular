export interface UserData{
    firstname: string,
    lastname: string,
    birthdate?: Date,
    address?: string,
    phone?: string,
    email: string,
}
export interface Session{
    username:string,
    password?:string,
    role?: "GUEST" | "STANDARD" | "ADMIN" | "PREMIUM",
    userData?: UserData,
}