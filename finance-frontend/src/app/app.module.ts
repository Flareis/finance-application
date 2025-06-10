import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule], // Remova standalone components do array de "declarations"
  bootstrap: [] // Não inclua standalone components aqui
})
export class AppModule {}