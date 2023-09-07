import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-ToDo',
    templateUrl: './ToDo.component.html'
})

export class ToDoComponent  {
    Data = [
        {
            "id": "Task 9",
            "desc": "I don't know",
            "field ": "done ",
            "": ""
        },
    {
            "id": "Task 10",
            "desc": "Show the retrieved data from the server in grid control",
            "field ": "to_do ",
            "": ""
        },
        {
            "id": "Task 11",
            "desc": "Fix cannot open user's default database SQL error",
            "field ": "in_progress ",
            "": ""
        },
        {
            "id": "Task 12",
            "desc": "Fix the issues reported in data binding",
            "field ": "in_review ",
            "": ""
        },
        
    ]
} 