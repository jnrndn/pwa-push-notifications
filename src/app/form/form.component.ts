import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ],
})
export class FormComponent implements OnInit {

  color: string = 'accent';
  checked: boolean = false;
  disabled: boolean = false;
  status: string = 'not';

  constructor() { }

  ngOnInit() {
  }

  onToggle(event) {
    this.status = (event.checked) ? '' : 'not';

  }

}
