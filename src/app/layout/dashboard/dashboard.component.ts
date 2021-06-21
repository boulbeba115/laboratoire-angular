import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StatService } from 'src/app/services/dashboard/dashboard.service';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    places: Array<any> = [];
    stats: any = {
        nbMember: 0,
        nbEvent: 0,
        nbPublication: 0,
        nbOutil: 0,
    }
    isReady: boolean = false
    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    }

    constructor(private statService: StatService) {
    }

    ngOnInit() {
        this.getStats();
    }
    getStats() {
        this.statService.getStats()
            .subscribe(
                data => {
                    this.stats = data;
                    this.isReady = true;
                },
                error => {
                    console.log(error);
                });
    }
}
