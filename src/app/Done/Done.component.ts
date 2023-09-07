import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-Done',
    templateUrl: './Done.component.html'
})

export class DoneComponent  {
    Data = [
        {
            "id": "Task 1",
            "desc": "Analyze the new requirements gathered from the customer",
            "field ": "to_do ",
            "": ""
        },
        {
            "id": "Task 2",
            "desc": "Improve application performance",
            "field ": "in_progress ",
            "": ""
        },
        {
            "id": "Task 3",
            "desc": "Arrange a web meeting with the customer to get new requirements",
            "field ": "to_do ",
            "": ""
        },
        {
            "id": "Task 4",
            "desc": "Fix the issues reported in the IE browser",
            "field ": "in_progress ",
            "": ""
        },
        
    ]
} 