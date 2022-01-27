export interface User {
  email: string
  password: string
  role?: string
}

export interface Response {
  users: Array<User>
 }
