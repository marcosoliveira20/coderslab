import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SpinnerService {

    private count = 0;
    private Spinner$ = new BehaviorSubject<string>('');

    constructor() {}

    getSpinnerObservable(): Observable<string> {
        return this.Spinner$.asObservable();
    }

    requestStarted() {
        if (++this.count === 1) {
            this.Spinner$.next('start');
        }
    }

    requestEnded() {
        if (this.count === 0 || --this.count === 0) {
            this.Spinner$.next('stop');
        }
    }

    resetSpinner() {
        this.count = 0;
        this.Spinner$.next('stop');        
    }

}