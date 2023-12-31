//it's an example only... better resolved with ngClass

import { Directive, ElementRef, Input, OnInit } from '@angular/core';
@Directive({
    selector:'[ttClass]'
})
export class ttClassDirective implements OnInit{

    @Input() ttClass: string;

    constructor(private el:ElementRef){}

    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.ttClass);
    }
}