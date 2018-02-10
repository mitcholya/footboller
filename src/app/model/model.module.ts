import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { UserRepository } from './user.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule 
    ],
    exports: [],
    providers: [
        StaticDataSource,
        UserRepository,
        RestDataSource
    ],
})
export class ModelModule {}