import { Component, OnInit } from '@angular/core';

import { Reservation } from '../_models/index';
import { UserService } from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    reservation : Reservation;
    reservations : Reservation[] = [];

    constructor(private userService: UserService) {
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.reservations = this.mockData();
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }


    private mockData(){
        var reservations = [{
            confirmNo : 'CRSXX12345',
            guestName : 'Mukkoti',
            status : 'In House',
            startDate : 'Jan 15, 2015',
            endDate : 'Feb 23, 2015',
            roomNo : 325,
            contactNo : '9986188000',
            imageUrl : 'https://www.sabre.com/wp/wp-content/themes/sabre-corp/images/sabre-logo-slab.svg'
            balance : 345,
            paymentType : 'Credit Card',
            guests : 2,
            reservationType : 'GROUP',
            profileId : '436744775335'
        }];

        return reservations;
    }


}