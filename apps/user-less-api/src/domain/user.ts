export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO 8061 Date Scalar */
  ISODateScalar: Date;
}

export interface IUser {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  dob: Date;
  address: string;
  description: string;
  lat: string;
  lng: string;
}

export interface IUserCriteria {
  name?: string
}

export interface IPageInfo {
  limit: number;
  cursor?: string;
}

export interface IUserPage {
  users: IUser[];
  cursor?: string
}
