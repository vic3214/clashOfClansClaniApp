import {ChangeDetectionStrategy, Component, effect, inject, input, signal, WritableSignal} from '@angular/core';
import {PlayerService} from '@app/services/player/player.service';
import {PlayerModel} from '@app/core/models/player.model';
import {LoaderComponent} from '@app/shared/loader/loader.component';

@Component({
  selector: 'app-player',
  imports: [LoaderComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent {
  private playerService = inject(PlayerService);

  tag = input<string>('');

  protected player: WritableSignal<PlayerModel|null> = signal(null);

  constructor() {
    effect(() => {
      this.playerService.getPlayerInfo(this.tag()).subscribe(playerInfo => {
        this.player.set(playerInfo);
      })
    });

  }


}
