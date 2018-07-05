import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

declare const $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    subMenu: any[];
    flag_drop: number = 0;
    flag: number = 0;
    constructor(public _data: SidebarService) { }

    ngOnInit() {
        this._data.getMenu().subscribe(
            (data: any) => {
                this.menuItems = data;
            }
        );
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    onMenuClick(id) {
            this._data.getSubMenu(id).subscribe(
                (data: any) => {
                    //alert("len = "+data.length);
                    if (data.length != 0) {
                        console.log("flag_drop = "+this.flag_drop);
                        this.flag_drop = id;
                        this.subMenu = data;
                    }
                }
            );
    }
}
