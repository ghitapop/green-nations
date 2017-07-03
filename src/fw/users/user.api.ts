import { Observable } from "rxjs/Observable";

export abstract class UserAPI {
    signIn: (username: string, password: string, remember: boolean) => Observable<any>;
    signOut: () => Observable<any>;
    getUserInfo: () => Observable<any>;
    register: (username: string, password: string, email: string) => Observable<any>;
}
