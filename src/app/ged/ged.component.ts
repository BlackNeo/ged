import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit {

  constructor() {

    document.getElementById('jquery-easing-min').remove();
    const jqueryEasing = document.createElement('script');
    jqueryEasing.setAttribute('id', 'jquery-easing-min');
    jqueryEasing.setAttribute('src', 'assets/vendor/jquery-easing/jquery.easing.min.js');
    document.body.appendChild(jqueryEasing);

    document.getElementById('chart-js').remove();
    const chart = document.createElement('script');
    chart.setAttribute('id', 'chart-js');
    chart.setAttribute('src', 'assets/vendor/chart.js/Chart.min.js');
    document.body.appendChild(chart);

    document.getElementById('jquery-dataTables').remove();
    const jqueryDataTables = document.createElement('script');
    jqueryDataTables.setAttribute('id', 'jquery-dataTables');
    jqueryDataTables.setAttribute('src', 'assets/vendor/datatables/jquery.dataTables.js');
    document.body.appendChild(jqueryDataTables);

    document.getElementById('dataTables-bootstrap4').remove();
    const dataTablesBootstrap4 = document.createElement('script');
    dataTablesBootstrap4.setAttribute('id', 'dataTables-bootstrap4');
    dataTablesBootstrap4.setAttribute('src', 'assets/vendor/datatables/dataTables.bootstrap4.js');
    document.body.appendChild(dataTablesBootstrap4);

    document.getElementById('sb-admin').remove();
    const sbAdmin = document.createElement('script');
    sbAdmin.setAttribute('id', 'sb-admin');
    sbAdmin.setAttribute('src', 'assets/vendor/sb-admin/sb-admin.min.js');
    document.body.appendChild(sbAdmin);

    document.getElementById('sb-admin-datatables').remove();
    const sbAdminDatatables = document.createElement('script');
    sbAdminDatatables.setAttribute('id', 'sb-admin-datatables');
    sbAdminDatatables.setAttribute('src', 'assets/vendor/sb-admin/sb-admin-datatables.min.js');
    document.body.appendChild(sbAdminDatatables);

    document.getElementById('sb-admin-charts').remove();
    const sbAdminCharts = document.createElement('script');
    sbAdminCharts.setAttribute('id', 'sb-admin-charts');
    sbAdminCharts.setAttribute('src', 'assets/vendor/sb-admin/sb-admin-datatables.min.js');
    document.body.appendChild(sbAdminCharts);
  }


  ngOnInit() {
  }
}
