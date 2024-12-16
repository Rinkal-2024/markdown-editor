import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , LMarkdownEditorModule , CommonModule , FormsModule ,AngularMarkdownEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  content: string = '';
  mode: string = 'edit';
  options: any = {};
  constructor(){}

  preRenderFunc(content: string) {
    return content.replace(/something/g, 'new value');
  }


  postRenderFunc(content: string) {
    return content.replace(/something/g, 'new value');
  }

  onEditorLoaded(event: any): void {
    console.log('Editor loaded:', event);
  }

  onPreviewDomChanged(event: any): void {
    console.log('Preview DOM changed:', event);
  }
}
