export interface Name {
    title:string,
    first:string,
    last:string
}
export interface Street {
    number: number,
    name: string
}
export interface Coords {
    latitude?: number,
    longitude?: number
}
export interface TimeZone{
    offset?: string,
    description?: string
}
export interface Location {
    street: Street,
    city?:string,
    state?:string,
    country?:string,
    postcode?:string,
    coordinates?:Coords,
    timezone?: TimeZone
}
export interface Login {
    uuid:string,
    username:string,
    password:string,
    salt:string,
    md5:string,
    sha1:string,
    sha256:string,
}
export interface DateObj {
    date?: Date|string,
    age?: number
}
export interface Picture {
    large?: string,
    medium?: string,
    thumbnail?: string,
}
export interface ID {
    name?: string,
    value?: number
}
export interface Candidate {
    gender?:'male'|'female'|undefined,
    name?: Name,
    location?: Location,
    email?: `${string}@${string}`,
    login:Login,
    dob?: DateObj,
    registered?: DateObj,
    phone?: string,
    cell?: string,
    id?: ID,
    picture?: Picture,
    nat?: string
}