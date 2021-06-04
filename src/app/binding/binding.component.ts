import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }
  // 1. string Interpolation
  name="Thanukrishna";
  rollno=1790540;
  dept="Civil"
  // 2.property Binding
  status="Student";
  hide:boolean=true;
  press(){
    if(this.hide==true){
      setTimeout(()=>{this.hide=false;},2000);
    }
    else{
      this.hide=true;
    }
}
//  3.Event binding
  statusc(){
    if(this.status=="Student"){
      this.status="Alumini"
    }
    else{
      this.status="Student"

    }
  }
  // 4.Two-way binding
  content="";
  // 5. Input and Output
  formsg:string="Click the button to receive Message from Output";
  pressmsg(data:any){
    this.formsg=data;
  }
  ngOnInit() {
  
  }

  

}
