import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{
 
  @Input() inputappvalue:string="";
  
  constructor() { }

  ngOnChanges(){
    console.log("changes made");
    }
    ngOnInit(){
      console.log("initialized");
    }
    ngDoCheck(){
      console.log("component checked");
    }
    ngAfterContentInit(){
      console.log("after content initialized");
    }
    ngAfterContentChecked(){
      console.log("After content checked")
    }
    ngAfterViewInit(){
      console.log("after view initialized");
    }
    ngAfterViewChecked(){
      console.log("after view checked")
    }
    ngOnDestroy(){
      console.log("Component Destroyed")
    }

}
