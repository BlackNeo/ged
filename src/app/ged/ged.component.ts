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
    $.getScript('/assets/vendor/jquery/dist/jquery.min.js', function(){});
    $.getScript('/assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js', function(){});
    $.getScript('/assets/vendor/jquery-easing/jquery.easing.min.js', function(){});
    $.getScript('/assets/vendor/chart.js/Chart.min.js', function(){});
    $.getScript('/assets/vendor/datatables/jquery.dataTables.js', function(){});
    $.getScript('/assets/vendor/datatables/dataTables.bootstrap4.js', function(){});
    $.getScript('/assets/vendor/sb-admin/sb-admin.min.js', function(){});
    setTimeout(() => {
      $.getScript('/assets/vendor/sb-admin/sb-admin-datatables.min.js', function(){});
      $.getScript('/assets/vendor/sb-admin/sb-admin-charts.min.js', function(){});
    }, 500);
  }
}
