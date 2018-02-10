import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpRequest,
    HttpEventType,
    HttpEvent,
    HttpResponse,
    HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { tap, filter, map } from 'rxjs/operators';
import { User } from "./user.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

    baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getUsers(): Observable<any> {
        return this.sendRequest('GET', "home");
    }

    private sendRequest(verb: string, url: string, body?: User)
        : Observable<any> {

        // let headers = new HttpHeaders();

        // if (auth && this.auth_token != null) {
        //     headers = headers.set("Authorization", `Bearer<${this.auth_token}>`);
        // }

        let request = new HttpRequest(
            verb,
            this.baseUrl + url,
            body,
            {
                // headers: headers,
                responseType: 'json'
            }
        );

        return this.http.request(request)
            .pipe(
                filter(event => event.type === HttpEventType.Response),
                map((response: HttpResponse<any>) => response.body)
            )

    }
}

