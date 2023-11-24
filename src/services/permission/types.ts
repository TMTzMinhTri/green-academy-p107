export interface IPermission {
  id: number;
  name: string;
  key: string;
  parent_id: number;
  children: IPermission[];
}
