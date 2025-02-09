import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@app/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ClashOfClans';
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  constructor() {
    this.matIconRegistry.addSvgIcon(
      'sword',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/sword.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'league',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '/assets/icons/league.svg'
      )
    );
  }
}
