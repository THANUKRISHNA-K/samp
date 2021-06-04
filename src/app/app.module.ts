import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { InputchildComponent } from './inputchild/inputchild.component';
import { BindingComponent } from './binding/binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputoutputComponent } from './inputoutput/inputoutput.component';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { Routing3Component } from './routing3/routing3.component';

const route:Routes=[
  {path:'next', component:Routing1Component},
{path:'move',component:Routing2Component}];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputchildComponent,
    BindingComponent,
    InputoutputComponent,
    Routing1Component,
    Routing2Component,
    Routing3Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
