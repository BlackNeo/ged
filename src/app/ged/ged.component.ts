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
    setTimeout(() => {
      $.getScript('/assets/vendor/jquery/dist/jquery.js', function(){});
      $.getScript('/assets/vendor/bootstrap/dist/js/bootstrap.bundle.js', function(){});
    }, 500);
    setTimeout(() => {
      $.getScript('/assets/vendor/jquery-easing/jquery.easing.js', function(){});
      $.getScript('/assets/vendor/chart.js/Chart.js', function(){});
      $.getScript('/assets/vendor/datatables/jquery.dataTables.js', function(){});
      $.getScript('/assets/vendor/datatables/dataTables.bootstrap4.js', function(){});
    }, 1000);
    setTimeout(() => {
      $.getScript('/assets/vendor/sb-admin/sb-admin.min.js', function(){});
      $.getScript('/assets/vendor/sb-admin/sb-admin-datatables.js', function(){});
      $.getScript('/assets/vendor/sb-admin/sb-admin-charts.js', function(){});
    }, 1500);
  }
}
