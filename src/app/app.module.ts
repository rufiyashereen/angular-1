import { NgModule } from "@angular/core"
import { AppComponent } from "./app.component"
import { UserComponent } from "./user/user.component"
import { TasksComponent } from "./tasks/tasks.component"
import { HeaderComponent } from "./header/header.component"
import { BrowserModule } from "@angular/platform-browser"
import { RouterOutlet } from "@angular/router"
import { NgFor, NgIf } from "@angular/common"
@NgModule({
    declarations: [AppComponent,HeaderComponent],//non standalone component
    bootstrap: [AppComponent],
    imports: [BrowserModule,UserComponent,TasksComponent,RouterOutlet,NgFor,NgIf]//standalone component
})
export class  AppModule{

}