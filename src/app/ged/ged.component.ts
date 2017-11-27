import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-ged',
  templateUrl: './ged.component.html',
  styleUrls: ['./ged.component.css']
})
export class GedComponent implements OnInit {

  constructor() {
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
