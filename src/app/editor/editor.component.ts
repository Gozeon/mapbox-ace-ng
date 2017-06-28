import { Component, OnInit } from '@angular/core';

import * as ace from 'brace';
import { Editor } from 'brace';
import 'brace/theme/monokai.js';
import 'brace/mode/javascript.js';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: Editor;

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.setOptions({
      tabSize: 2
    });
    this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/javascript');
  }
}
