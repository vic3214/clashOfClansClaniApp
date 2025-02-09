import {
  Item

} from '@app/core/models/base-models/member-list-base.model';
import { RoleTranslation } from '@app/core/enums/role-translation.enum';
import {MemberListResponseModel} from '@app/core/models/response-models/member-list-response.model';
import {Member, MemberListModel} from '@app/core/models/member-list.model';
import {Role} from '@app/core/models/base-models/clan-base.model';


const roleMapping: { [key in Role]: RoleTranslation } = {
  [Role.Admin]: RoleTranslation.Admin,
  [Role.CoLeader]: RoleTranslation.CoLeader,
  [Role.Leader]: RoleTranslation.Leader,
  [Role.Member]: RoleTranslation.Member,
};

export const MemberAdapter = (membersResponse: MemberListResponseModel): MemberListModel => {

  const adaptMember = (item: Item & { role: Role }): Member => {  // Tipado correcto
    return {
      tag: item.tag,
      name: item.name,
      townHallLevel: item.townHallLevel,
      expLevel: item.expLevel,
      league: {
        id: item.league.id,
        name: item.league.name,
        iconUrls: {
          small: item.league.iconUrls.small,
          tiny: item.league.iconUrls.tiny,
          medium: item.league.iconUrls.medium,
        },
      },
      trophies: item.trophies,
      builderBaseTrophies: item.builderBaseTrophies,
      clanRank: item.clanRank,
      previousClanRank: item.previousClanRank,
      donations: item.donations,
      donationsReceived: item.donationsReceived,
      role: roleMapping[item.role] || item.role as unknown as RoleTranslation, // Mapeo del rol
      playerHouse: item.playerHouse ? {
        elements: item.playerHouse.elements.map(element => ({
          type: element.type,
          id: element.id,
        })),
      } : undefined,
      builderBaseLeague: {
        id: item.builderBaseLeague.id,
        name: item.builderBaseLeague.name,
      },
    };
  };

  return {
    items: (membersResponse.items as (Item & { role: Role })[]).map(adaptMember), // Tipado del array
    paging: membersResponse.paging,
  };
};
