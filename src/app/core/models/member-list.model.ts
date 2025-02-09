
import {
  BuilderBaseLeague,
  Item,
  League,
  MemberListBaseModel,
  PlayerHouse
} from '@app/core/models/base-models/member-list-base.model';
import {RoleTranslation} from '@app/core/enums/role-translation.enum';

export interface MemberListModel extends MemberListBaseModel{
  items:  Member[];
}

export interface Member {
  tag:                 string;
  name:                string;
  townHallLevel:       number;
  expLevel:            number;
  league:              League;
  trophies:            number;
  builderBaseTrophies: number;
  clanRank:            number;
  previousClanRank:    number;
  donations:           number;
  donationsReceived:   number;
  role:RoleTranslation;
  playerHouse?:        PlayerHouse;
  builderBaseLeague:   BuilderBaseLeague;
}
