import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit, signal, WritableSignal,
} from '@angular/core';
import { MemberList } from '@app/core/models/clan.model';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer} from '@angular/platform-browser';
import { MembersService } from '@app/services/members/members.service';
import {Item} from '@app/core/models/base-models/member-list-base.model';
import {Member} from '@app/core/models/member-list.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members',
  imports: [ MatIconModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembersComponent implements OnInit {
  private membersService = inject(MembersService);
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);
  private router = inject(Router);

  protected clanMembers: WritableSignal<Member[]> = signal([]);
  private orderStates = {
    clanRank:true,
    name: true,
    role: true,
    trophies: true,
    donations: true,
    donationsReceived: true
  };

  constructor() {
    this.matIconRegistry.addSvgIcon(
      'green-arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/green-arrow.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'red-arrow',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/red-arrow.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'equal',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/equal.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'filter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/filter-arrows.svg')
    );
  }
  ngOnInit(): void {

    this.membersService.getAllClanMembers().subscribe((members) => {
      this.clanMembers.set(members.items);
    });
  }

  goToMemberDetail(memberTag:string){
    this.router.navigate(['/player',memberTag]);
  }

  orderMembersByRank() {
    const isAscending = this.toggleOrder('clanRank');
    this.clanMembers.update((members) =>
      [...members].sort((a, b) => isAscending ? a.clanRank - b.clanRank : b.clanRank - a.clanRank)
    );
  }


  orderMembersByName() {
    const isAscending = this.toggleOrder('name');
    this.clanMembers.update(members =>
      members.sort((a, b) => isAscending ?  b.name.localeCompare(a.name):a.name.localeCompare(b.name))
    );
  }

  orderMembersByRole() {
    const isAscending = this.toggleOrder('role');

    // Definir la jerarquía de roles con valores numéricos
    const rolePriority: { [key: string]: number } = {
      'Líder': 1,
      'Colíder': 2,
      'Veterano': 3,
      'Miembro': 4
    };

    this.clanMembers.update((members) =>
      [...members].sort((a, b) => {
        const roleA = rolePriority[a.role] || 5; // Si no está en la lista, ponerlo al final
        const roleB = rolePriority[b.role] || 5;

        // Comparar por rol primero
        if (roleA !== roleB) {
          return isAscending ?  roleB - roleA:roleA - roleB ;
        }

        // Si tienen el mismo rol, ordenar por clanRank
        return isAscending ? a.clanRank - b.clanRank : b.clanRank - a.clanRank;
      })
    );
  }


  orderMembersByTrophies() {
    const isAscending = this.toggleOrder('trophies');
    this.clanMembers.update(members =>
      members.sort((a, b) => isAscending ? a.trophies - b.trophies : b.trophies - a.trophies)
    );
  }

  orderMembersByDonations() {
    const isAscending = this.toggleOrder('donations');
    this.clanMembers.update(members =>
      members.sort((a, b) => isAscending ? a.donations - b.donations : b.donations - a.donations)
    );
  }

  orderMembersByRecivedDonations() {
    const isAscending = this.toggleOrder('donationsReceived');
    this.clanMembers.update(members =>
      members.sort((a, b) => isAscending ? a.donationsReceived - b.donationsReceived : b.donationsReceived - a.donationsReceived)
    );
  }

  private toggleOrder(property: keyof typeof this.orderStates) {
    this.orderStates[property] = !this.orderStates[property]; //
    return this.orderStates[property];
  }


}
