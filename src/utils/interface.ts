export interface AuthContextType {
    token:string|null;
    login:(token:string)=>void;
    logout:()=>void;
    isAuthenticated:boolean;
}

export interface Action{
    id:string;
    name:string;
    description:string;
    status?:string;
    createdAt?:string;
}

export interface PaginatedResponse{
    data:Action[];
    tottalRecords:number;
    pageNumber:number;
    pageSize:number;
}

export interface ActionForm{
    name:string;
    description:string;
    status:string;
}