import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {CapitalService} from '@app/services/capital/capital.service';
import {Item} from '@app/core/models/capital.model';
import {DatePipe, DecimalPipe} from '@angular/common';
import {LoaderComponent} from '@app/shared/loader/loader.component';

@Component({
  selector: 'app-capital',
  imports: [
    DecimalPipe,
    DatePipe,LoaderComponent
  ],
  templateUrl: './capital.component.html',
  styleUrl: './capital.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapitalComponent {
  private capitalService = inject(CapitalService);

  capitalHistory = this.capitalService.capitalHistory$;
  latestRaidSeason = computed(() => this.capitalHistory()?.items[0]);


  calculateAttackEfficiency(item: Item): number {
    if (!item.totalAttacks) return 0; // Avoid division by zero
    return (item.enemyDistrictsDestroyed / item.totalAttacks) * 100;
  }

}
