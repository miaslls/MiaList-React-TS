import ICredential from "@interfaces/Credential";
import IAuthorization from "@interfaces/Autorization";

type AuthResponse = IAuthorization | false;

class AuthService {
  static async Authenticate(credential: ICredential): Promise<AuthResponse> {
    const response = await fetch("https://mialog-api.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify(credential),
    });

    const Authorization: AuthResponse = response.json;

    return Authorization;
  }
}

export default AuthService;
