import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.css']
})
export class InputchildComponent implements OnInit {
@Input() inputchildvalue:string='';
  constructor() { }
  ngOnChanges(){
    console.log("child-changes made");
    }
    ngOnInit(){
      console.log("child-initialized");
    }
    ngDoCheck(){
      console.log("child-component checked");
    }
    ngAfterContentInit(){
      console.log("child-after content initialized");
    }
    ngAfterContentChecked(){
      console.log("child-After content checked")
    }
    ngAfterViewInit(){
      console.log("child-after view initialized");
    }
    ngAfterViewChecked(){
      console.log("child-after view checked")
    }
    ngOnDestroy(){
      console.log("child-Component Destroyed")
    }
 
  
}
