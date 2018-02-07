import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { User } from "./user.model";

@Injectable()
export class StaticDataSource {

    private user: User[] = [
        new User(1, "User1", 1, "Russia" ),
        new User(2, "User2", 2, "Russia" ),
    ];

    getNews(): Observable<User[]> {
        return Observable.from([this.user]);
    }

}