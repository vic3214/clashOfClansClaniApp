import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import {WarsService} from '@app/services/wars/wars.service';
import {LoaderComponent} from '@app/shared/loader/loader.component';
import {DatePipe} from '@angular/common';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-wars',
  imports: [
    LoaderComponent,DatePipe,MatIconModule
  ],
  templateUrl: './wars.component.html',
  styleUrl: './wars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarsComponent {
  private warService = inject(WarsService);
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  actualWar = this.warService.actualWar$;

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/star.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'empty-star',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/empty-star.svg')
    );
  }

  getClanMemberName(clan:any, memberTag: string|undefined): string {
    const member = clan?.members?.find((member:any) => member.tag === memberTag);
    return member ? member?.name : memberTag;
  }

  get sortedClanMembers() {
    return this.actualWar()?.clan?.members?.sort((a, b) => a.mapPosition - b.mapPosition) || [];
  }

  get sortedOpponentMembers() {
    return this.actualWar()?.opponent?.members?.sort((a, b) => a.mapPosition - b.mapPosition) || [];
  }

}
