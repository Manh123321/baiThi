import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-InReview',
    templateUrl: './InReview.component.html'
})

export class InReviewComponent  {
    Data = [
        {
            "id": "Task 5",
            "desc": "Fix the issues reported by the customer",
            "field ": "in_review ",
            "": ""
        },
        {
            "id": "Task 6",
            "desc": "I don't know",
            "field ": " ",
            "": ""
        },
        {
            "id": "Task 7",
            "desc": "Fix the issues reported in Safari browser",
            "field ": "in_review ",
            "": ""
        },
        {
            "id": "Task 8",
            "desc": "Test the application in the IE browser",
            "field ": "done ",
            "": ""
        },
        
    ]
} 