export interface JwtContract {
  createToken: (id: string) => Promise<string>
}