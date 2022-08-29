export class Coupan {
    coupanId : number;
    coupanName : string;
    coupanCost : number;
    coupanType:string;
    coupanDescription : string;

    constructor(coupanId : number,  coupanName : string, coupanCost : number, coupanDescription : string,coupanType:string){
        this.coupanId= coupanId;
        this.coupanName= coupanName;
        this.coupanCost= coupanCost;
        this.coupanDescription= coupanDescription;
        this.coupanType=coupanType;
    }
}
