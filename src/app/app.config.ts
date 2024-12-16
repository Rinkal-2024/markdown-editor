import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(), importProvidersFrom(AngularMarkdownEditorModule.forRoot({ iconlibrary: 'fa' }))
  ]
};
