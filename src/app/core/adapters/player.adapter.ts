import { PlayerBaseModel } from '@app/core/models/base-models/player-base.model';
import {RoleTranslation} from '@app/core/enums/role-translation.enum';
import {Role} from '@app/core/models/base-models/clan-base.model';
import {PlayerResponseModel} from '@app/core/models/response-models/player-response.model';


const roleMapping: { [key in Role]: RoleTranslation } = {
  [Role.Admin]: RoleTranslation.Admin,
  [Role.CoLeader]: RoleTranslation.CoLeader,
  [Role.Leader]: RoleTranslation.Leader,
  [Role.Member]: RoleTranslation.Member,
};

const warPreferenceMapping ={
  'in': 'Dentro',
  'out': 'Fuera'
}

export const PlayerAdapter = (player: PlayerBaseModel): PlayerResponseModel => {
  return {
    ...player,
    warPreference: warPreferenceMapping[player.warPreference as keyof typeof warPreferenceMapping] ?? player.warPreference,
    role: roleMapping[player.role as Role] ?? RoleTranslation.Member,
  };
};
