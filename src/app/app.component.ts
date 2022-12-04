import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { TestComponent } from "./test/test.component";
import { ListComponent } from "./list/list.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor(public dialogService: DialogService, public messageService: MessageService) { }

    ref: DynamicDialogRef;

    show() {
        this.ref = this.dialogService.open(ListComponent, {
            header: 'Choose a Product',
            width: '70%',
        });
        this.ref.onClose.subscribe((costumer: any) => {
            if (costumer) {
                this.messageService.add({ severity: 'info', summary: 'Costumer Selected', detail: costumer.name });
            }
        });
    }

    ngOnDestroy() {
        if (this.ref) {
            this.ref.close();
        }
    }

}
