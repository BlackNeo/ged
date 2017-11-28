import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
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
    $.getScript('../node_modules/jquery/dist/jquery.min.js');
    $.getScript('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
    $.getScript('/assets/vendor/jquery-easing/jquery.easing.min.js');
    $.getScript('/assets/vendor/chart.js/Chart.min.js');
    $.getScript('/assets/vendor/datatables/jquery.dataTables.js');
    $.getScript('/assets/vendor/datatables/dataTables.bootstrap4.js');
    $.getScript('/assets/vendor/sb-admin/sb-admin.min.js');
    $.getScript('/assets/vendor/sb-admin/sb-admin-datatables.min.js');
    $.getScript('/assets/vendor/sb-admin/sb-admin-charts.min.js');
  }
}
