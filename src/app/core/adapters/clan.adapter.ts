
import {RoleTranslation} from '@app/core/enums/role-translation.enum';
import {ClanModel, MemberList} from '@app/core/models/clan.model';
import {MemberListResponse, Role} from '@app/core/models/base-models/clan-base.model';
import {ClanResponseModel} from '@app/core/models/response-models/clan-response.model';


const roleMapping: { [key in Role]: RoleTranslation } = {
  [Role.Admin]: RoleTranslation.Admin,
  [Role.CoLeader]: RoleTranslation.CoLeader,
  [Role.Leader]: RoleTranslation.Leader,
  [Role.Member]: RoleTranslation.Member,
};

export const ClanAdapter = (clanResponse: ClanResponseModel): ClanModel => {

  const adaptMember = (member: MemberListResponse): MemberList => {
    const adaptedMember: MemberList = {
      ...member,
      role: roleMapping[member.role] || member.role as unknown as RoleTranslation,

    };
    return adaptedMember;
  };

  const adaptedClan: ClanModel = {
    ...clanResponse,
    memberList: clanResponse.memberList.map(adaptMember),
  };

  return adaptedClan;
};
