import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headers = [
    { code: 'name', displayText: 'Nombre' },
    { code: 'country', displayText: 'País' },
    { code: 'representative', displayText: 'Representante' },
    { code: 'date', displayText: 'Fecha' },
    { code: 'status', displayText: 'Estado' },
    { code: 'activity', displayText: 'Actividad' },
  ]

  options = ['create', 'update', 'delete']

  options2 = ['create']

  costumers = [
    {
      "id": 1000,
      "name": "James Butt",
      "country": {
        "name": "Algeria",
        "code": "dz"
      },
      "company": "Benton, John B Jr",
      "date": "2015-09-13",
      "status": "unqualified",
      "activity": 17,
      "representative": {
        "name": "Ioni Bowcher",
        "image": "ionibowcher.png"
      }
    },
    {
      "id": 1001,
      "name": "Josephine Darakjy",
      "country": {
        "name": "Egypt",
        "code": "eg"
      },
      "company": "Chanay, Jeffrey A Esq",
      "date": "2019-02-09",
      "status": "proposal",
      "activity": 0,
      "representative": {
        "name": "Amy Elsner",
        "image": "amyelsner.png"
      }
    }
  ]

  items = ['item1', 'item2', 'item3', 'item4'];

  create() {
    console.log('create');
  }

  update(costumer: any) {
    console.log('update', costumer);
  }

  delete(costumer: any) {
    console.log('delete', costumer);
  }


}
