import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { UserRepository } from './user.repository';

@NgModule({
    declarations: [],
    imports: [ ],
    exports: [],
    providers: [
        StaticDataSource,
        UserRepository
    ],
})
export class ModuleModule {}