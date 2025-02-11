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

export const PlayerAdapter=(player: PlayerBaseModel): PlayerResponseModel=> {
  return {
    ...player,
    role: roleMapping[player.role as Role] || RoleTranslation.Member, // Traduce el rol usando el mapping
  };
}
