import ICredential from "../interfaces/Credential";
import IAuthorization from "../interfaces/Authorization";

type AuthResponse = IAuthorization | false;

const parseResponse = (response: Response) => response.json();

class AuthService {
  static async Authenticate(credential: ICredential): Promise<AuthResponse> {
    const Authorization: IAuthorization = await fetch(
      "https://mialist-api-express.onrender.com/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credential),
      }
    ).then(parseResponse);

    return Authorization;
  }
}

export default AuthService;
