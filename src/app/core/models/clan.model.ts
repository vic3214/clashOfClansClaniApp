
import {RoleTranslation} from '@app/core/enums/role-translation.enum';
import {ClanBaseModel, League, LeagueClass, PlayerHouse} from '@app/core/models/base-models/clan-base.model';


export interface ClanModel extends ClanBaseModel {
  memberList: MemberList[];
}

export interface MemberList {
  tag: string;
  name: string;
  role: RoleTranslation;
  townHallLevel: number;
  expLevel: number;
  league: LeagueClass;
  trophies: number;
  builderBaseTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  playerHouse?: PlayerHouse;
  builderBaseLeague: League;
}
