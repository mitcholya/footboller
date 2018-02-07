import { Injectable } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { HttpResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { User } from "./user.model";
//import { RestDataSource } from "./rest.datasource";


@Injectable()
export class UserRepository {
    private users: User[] = [];
    private names: string[] = [];

    constructor(private dataSource: StaticDataSource) {

        dataSource.getNews()
        .subscribe(response => {
            //console.log(response.body);
            let data = response;
            this.users = <User[]>data;
            this.names = <string[]>data.map(p => p.name);
                //.filter((c, index, array) => array.indexOf(c) == index).sort();
            });
        
    }

    getUsers(): User[] {
        //console.log(this.products);
        return this.users
            //.filter(p => category == null || category == p.category);
    }

    getUser(id: number): User {
        
        return this.users.find(u => u.id == id);
    }

    getNames(): string[] {
        return this.names;
    }

}