export type OwnerTokenDto = {
  sub: string;
  establishmentId: number;
  scope: string[];
  exp: number;
};

export type OwnerDto = {
  name: string;
  email: string;
  roles: [
    {
      roleId: number;
      name: string;
      users: [];
    }
  ];
  refreshToken: string;
};
