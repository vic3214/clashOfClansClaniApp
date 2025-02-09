import { NgOptimizedImage } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'sword',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/sword.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'league',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/league.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'members',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/members.svg')
    );
  }
}
