import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {
@Input() Message:string="This message is from Input";
@Input() msgtwo:string="";
@Output() parentemit=new EventEmitter();
  constructor() { }

  outmsg(event:any){
    this.parentemit.emit("This Message is from Output")
  }
  ngOnInit(): void {
  }

}
