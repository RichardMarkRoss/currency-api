import { observable} from 'rxjs';
export interface Comments
{
   base: string;
   date: string;
   motd: {
    msg: string;
    url: string;
   };
   rates: {};
   suscess: boolean;
}
