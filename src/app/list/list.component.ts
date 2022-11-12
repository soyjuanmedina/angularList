import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer, Representative } from './customer';
import { CustomerService } from './customerservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    @Input() headers: any;
    @Input() customers: any;
    @Input() options: any;
    @Output() create = new EventEmitter<any>();
    @Output() update = new EventEmitter<any>();
    @Output() delete = new EventEmitter<any>();
    @Output() select = new EventEmitter<any>();

    selectedCustomers: Customer[] = [];

    representatives: Representative[] = [];

    statuses: any[] = [];

    loading: boolean = false;

    constructor(private customerService: CustomerService, private primengConfig: PrimeNGConfig) {
    }

    ngOnInit() {
    }

    emitCreate() {
        this.create.emit();
    }

    emitUpdate(costumer: any) {
        this.update.emit(costumer);
    }

    emitDelete(costumer: any) {
        this.delete.emit(costumer);
    }

    emitSelect(costumer: any) {
        this.select.emit(costumer);
    }

}
