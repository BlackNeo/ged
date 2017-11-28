import { Component, OnInit, AfterViewInit } from '@angular/core';
import { User } from '../user';
declare var $: any;

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit, AfterViewInit {

  constructor() {
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    $.getScript('assets/vendor/sb-admin/sb-admin-datatables.min.js', function(){});
    $.getScript('assets/vendor/sb-admin/sb-admin-datatables.min.js', function(){});
  }
}
