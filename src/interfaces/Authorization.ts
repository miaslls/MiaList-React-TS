interface IUser {
  id: string;
  username: string;
}

export default interface IAuthorization {
  token: string;
  user: IUser;
}
