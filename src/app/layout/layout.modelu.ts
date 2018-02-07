import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';
import { ContentComponent } from './content.component';

@NgModule({
    declarations: [
        ToolbarComponent,
        ContentComponent
    ],
    imports: [ BrowserModule ],
    exports: [
        ToolbarComponent,
        ContentComponent
    ],
    providers: [],
})
export class LayoutModule {}