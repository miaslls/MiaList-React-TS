import IAuthorization from "../interfaces/Authorization";

class AuthorizationService {
  static SaveToLocalStorage(token: IAuthorization): void {
    localStorage.setItem("Authorization", JSON.stringify(token));
  }

  static GetFromLocalStorage(): string | false {
    const token: string | null = localStorage.getItem("Authorization");

    return token ? token : false;
  }

  static ClearLocalStorage(): void {
    localStorage.clear();
  }
}

export default AuthorizationService;
