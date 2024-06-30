export type UserTokenDto = {
  sub: string;
  establishmentId: number;
  genres: string[];
  scope: string[];
  exp: number;
};
