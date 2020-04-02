export class ComicModel{
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
    rate : number = 0;

    getDay():number{
        return this.convertToNumber(this.day);
    }

    getMonth():number{
        return this.convertToNumber(this.month);
    }

    getYear():number{
        return this.convertToNumber(this.year);
    }


    private convertToNumber(str):number{
        var coonvertedNumber = parseInt(str);
        if(!isNaN(coonvertedNumber)){
            return coonvertedNumber;
        }        
        return -1;
    }
}