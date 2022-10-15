interface IUser {
  id: string;
  username: string;
}

interface IAuthorization {
  token: string;
  user: IUser;
}

export default IAuthorization;
